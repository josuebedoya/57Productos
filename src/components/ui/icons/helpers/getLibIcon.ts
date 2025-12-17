import libraryIcons from "@ui/icons/configs/libraryPrefix.js";
import {t} from "i18next";

const getLibIcon = async (iconName: string, version?: number) => {
  if (typeof iconName !== 'number' && typeof iconName !== 'string') throw new Error(t("components.icons.errors.iconNameNotString"));

  if (!iconName || !iconName.trim()) throw new Error(t("components.icons.errors.iconNoName"));

  const prefix = iconName?.toString()?.match(/^([A-Z][a-z]+)/)?.[1]?.toLowerCase() ?? null;
  const libs = Object.entries(libraryIcons).find(([k]) => k === prefix) || [];

  const versionUSe = version ? `v${version}` : "default";
  const versionLib = libs[1]?.[versionUSe as keyof typeof libs[1]];

  if (!versionLib) throw new Error(t("components.icons.errors.versionLibNotFound", {version, family: prefix}));

  const entry = libs[1]?.[versionUSe as keyof typeof libs[1]] ?? libs[1]?.default;

  if (!entry) throw new Error(t("components.icons.errors.iconNotFound", {iconName}));

  return await entry();
}

export default getLibIcon;