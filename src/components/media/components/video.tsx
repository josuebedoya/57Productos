import React from 'react';
import type {VideoProps} from "@/components/media/types.js";
import formattedSrc from "@/components/media/helpers/formattedSrc.ts";
import AVPlayer from "@/components/media/components/AVPlayer.js";

const Video: React.FC<VideoProps> = (
  {
    src,
    extensions = ['mp4'],
    controls = true,
    muted = true,
    unsupportedLabel = 'Tu navegador no soporta videos.',
    ...props
  }: VideoProps): React.ReactElement => {

  const mimeMap: Record<string, string> = {
    mp4: "video/mp4",
    webm: "video/webm",
    ogv: "video/ogg",
    mov: "video/quicktime",
  };

  const data = formattedSrc(src, extensions || ['mp4']);

  return (
    <AVPlayer
      src={src}
      data={data}
      mimes={mimeMap}
      type={1}
      extensions={extensions}
      muted={muted}
      controls={controls}
      {...props}
    />
  );
};

export default Video;