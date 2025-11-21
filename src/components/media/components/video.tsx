import React from 'react';
import type {VideoProps} from "@ui/media/types.js";
import formattedSrc from "@ui/media/helpers/formattedSrc.ts";
import AVPlayer from "@ui/media/components/AVPlayer.js";
import {mimesVideo} from "@ui/media/configs/mimesFiles.js";

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