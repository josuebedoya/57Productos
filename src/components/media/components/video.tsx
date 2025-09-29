import React from 'react';
import type {VideoProps} from "@/components/media/types.js";
import formattedSrc from "@/components/media/helpers/formattedSrc.ts";
import AVPlayer from "@/components/media/components/AVPlayer.js";
import {mimesVideo} from "@/components/media/configs/mimesFiles.js";

const Video: React.FC<VideoProps> = (
  {
    src,
    extensions = ['mp4'],
    controls = true,
    muted = true,
    unsupportedLabel = 'Tu navegador no soporta videos.',
    ...props
  }: VideoProps): React.ReactElement => {

  const data = formattedSrc(src, extensions || ['mp4']);

  return (
    <AVPlayer
      src={src}
      data={data}
      mimes={mimesVideo}
      type={1}
      extensions={extensions}
      muted={muted}
      controls={controls}
      {...props}
    />
  );
};

export default Video;