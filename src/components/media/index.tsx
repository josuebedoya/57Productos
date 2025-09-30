import type {MediaProps} from "./types.d.ts";
import React from "react";
import useMedia from "@/components/media/hooks/useMedia.js";
import Image from "@/components/media/components/image.js";
import Video from "@/components/media/components/video.js";
import Audio from "@/components/media/components/audio.js";
import Document from "@/components/media/components/document.js";
import {defaultExt, defaultsImg} from "@/components/media/configs/defaultContent.js";

const Media: React.FC<MediaProps> = ({src, audioProps, imageProps, documentProps, videoProps}) => {
  const {fileSrc, typeFile} = useMedia(src, defaultExt);

  const srcImg = (type: keyof typeof defaultsImg) => {
    if (['notfound', 'unsupported', 'default', 'unknown'].includes(type)) {
      return defaultsImg[type];
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