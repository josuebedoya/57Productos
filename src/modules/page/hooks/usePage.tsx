import {useTranslation} from "react-i18next";
import React, {lazy, useState, useMemo, useEffect} from "react";

type UsePageResult =
  | { Component: React.LazyExoticComponent<any> | null; error: false }
  | { Component: null; error: true };

export const usePage = (modulePath: string): UsePageResult => {
  const {t} = useTranslation();
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [modulePath]);

  const viewModules = import.meta.glob([
    "/src/modules/**/pages/**/*.{tsx,jsx}",
    "/src/pages/*/*.{tsx,jsx}",
  ]);

  const formattedSrc = modulePath.replace("@", "/src");
  const importFn = viewModules[formattedSrc];

  const Component = useMemo(() => {
    if (!importFn) {
      return lazy(() => {
        setError(true);
        return Promise.reject(
          new Error(
            t("modules.page.errors.noFoundModule", {path: formattedSrc})
          )
        );
      });
    }

    return lazy(async () => {
      try {
        const mod = (await importFn()) as Record<string, any>;
        const Page = mod.default ?? mod[Object.keys(mod)[0] as string];

        if (!Page) throw new Error(t('modules.page.errors.noValidModule'));

        return {default: Page};
      } catch (err) {
        setError(true);
        throw err;
      }
    });
  }, [formattedSrc, importFn, t]);

  return error ? {Component: null, error: true} : {Component, error: false};
};

export default usePage;
