import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import libraryIcons from "@/components/icons/configs/libraryPrefix.ts";

export const useImportIcon = (iconName: string, version?: number) => {
  const [icon, setIcon] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string>("");
  const {t} = useTranslation();

  useEffect(() => {
    if (!iconName) {
      setError(t("components.icons.errors.iconNameRequired"));
      return;
    }

    const loadIcon = async () => {
      try {

        const prefix = iconName.match(/^([A-Z][a-z]+)/)?.[1]?.toLowerCase() ?? null;
        const libs = Object.entries(libraryIcons).find(([k]) => k === prefix) || [];
        const versionUSe = version ? `v${version}` : "default";
        const versionLib = libs[1]?.[versionUSe as keyof typeof libs[1]];

        if (!versionLib) throw new Error(t("components.icons.errors.versionLibNotFound", {version, family: prefix}));

        const entry = libs[1]?.[versionUSe as keyof typeof libs[1]] ?? libs[1]?.default;

        if (!entry) throw new Error(t("components.icons.errors.iconNotFound", {iconName}));

        const libUse = await entry();
        const Icon = libUse[iconName as keyof typeof libUse] as unknown as React.ComponentType;

        if (!Icon) throw new Error(t("components.icons.errors.iconNotFound", {iconName}));

        setIcon(() => Icon);

      } catch (e: any) {
        console.error(e);
        setError(e.message);
      }
    };

    loadIcon();
  }, [iconName, t]);

  return {icon, error};
};
