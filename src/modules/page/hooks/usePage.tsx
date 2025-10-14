import {useTranslation} from "react-i18next";
import React, {lazy, useState, useMemo} from "react";

type UsePageResult =
  | { Component: React.LazyExoticComponent<any> | null; error: false }
  | { Component: null; error: true };

export const usePage = (modulePath: string): UsePageResult => {
  const {t} = useTranslation();
  const [error, setError] = useState(false);

  const viewModules = import.meta.glob('/src/**/*.{tsx,jsx}');
  const formattedSrc = modulePath.replace('@', '/src');
  const importFn = viewModules[formattedSrc];

  const Component = useMemo(() => {
    if (!importFn || typeof importFn !== 'function') {
      console.error(t('modules.page.errors.noFoundModule', {path: formattedSrc}));
      setError(true);
      return null;
    }

    return lazy(async () => {
      try {
        const mod = await importFn() as Record<string, any>;

        if (mod?.default) return {default: mod.default};

        const firstKey = Object.keys(mod)[0];
        if (!firstKey || !mod[firstKey]) {
          console.error(t('modules.page.errors.noFoundModule', {path: formattedSrc}));
          throw new Error(t('modules.page.errors.noValidModule'));
        }

        return {default: mod[firstKey]};
      } catch (err) {
        console.error(t('modules.page.errors.noValidModule'), err);
        setError(true);
        throw err;
      }
    });
  }, [formattedSrc, importFn, t]);

  return error ? {Component: null, error: true} : {Component, error: false};
};

export default usePage;