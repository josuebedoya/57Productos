import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import getLibIcon from "@ui/icons/helpers/getLibIcon.js";

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
        const libUse = await getLibIcon(iconName, version);
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
