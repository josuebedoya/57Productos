import React from "react";
import {useTranslation} from "react-i18next";
import {useImportIcon} from "@ui/icons/hooks/useImportIcon.tsx";
import type {IconProps} from "@ui/icons/types.js";
import Loading from "@ui/icons/components/loading.js";
import Media from "@ui/media/index.js";

const Icon: React.FC<IconProps> = ({name, versionFamily, ...props}) => {

  const {icon: LoadedIcon, error} = useImportIcon(name, versionFamily);
  const {t} = useTranslation();

  // Error state
  if (error) {
    return (
      <Media
        src="/assets/images/system/c/icon/failed.png"
        imageProps={{
          alt: t("components.icons.errors.iconNotFound", {iconName: name}),
          className: "w-6 h-6 opacity-50"
        }}
      />
    );
  }

  // Loading state
  if (!LoadedIcon) {
    return (
      <div className="flex justify-center p-4">
        <Loading className={props.className || ''}/>
      </div>
    );
  }

  return (
    <div className='icon' aria-label={name}>
      <LoadedIcon {...props} />
    </div>
  );
}

export default Icon;
