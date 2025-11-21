import type {MediaProps} from "./types.d.ts";
import React, {useEffect} from "react";
import useMedia from "@ui/media/hooks/useMedia.js";
import Image from "@ui/media/components/image.js";
import Video from "@ui/media/components/video.js";
import Audio from "@ui/media/components/audio.js";
import Document from "@ui/media/components/document.js";
import {defaultExt, defaultsImg} from "@ui/media/configs/defaultContent.js";

const Media: React.FC<MediaProps> = (
  {
    src,
    audioProps,
    imageProps,
    documentProps,
    videoProps,
    notfound,
    unknown,
    unsupported,
    defaults,
  }) => {
  const {fileSrc, typeFile} = useMedia(src, defaultExt);

  const srcImg = (type: keyof typeof defaultsImg) => {

    if (['notfound', 'unsupported', 'default', 'unknown'].includes(type) && type !== 'image') {
      const map = {default: defaults, notfound, unsupported, unknown} as const;

      return map[type] || defaultsImg[type];
    }

    return src;
  };

  switch (typeFile) {
    case 'image':
    case 'notfound':
    case 'unsupported':
    case 'default':
    case 'unknown':
      return <Image src={srcImg(typeFile)} {...imageProps} />;
    case 'video':
      return <Video src={fileSrc} {...videoProps} extensions={defaultExt}/>;
    case 'audio':
      return <Audio src={fileSrc} {...audioProps} extensions={defaultExt}/>;
    case 'document':
    case 'officedocument':
    case 'text':
      return <Document src={fileSrc} {...documentProps} typeFile={typeFile}/>;
    default:
      return <Image src={srcImg('unsupported')} {...imageProps} />;
  }
};

export default Media;