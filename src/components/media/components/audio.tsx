import React from 'react';
import type {AudioProps} from "@/components/media/types.js";
import formattedSrc from "@/components/media/helpers/formattedSrc.ts";
import AVPlayer from "@/components/media/components/AVPlayer.js";
import {mimesAudio} from "@/components/media/configs/mimesFiles.ts";

const Audio: React.FC<AudioProps> = (
  {
    src,
    extensions = ['mp3'],
    controls = true,
    muted = true,
    unsupportedLabel = 'Tu navegador no soporta videos.',
    ...props
  }: AudioProps): React.ReactElement => {

  const data = formattedSrc(src, extensions || ['mp3']);

  return (
    <AVPlayer
      type={2}
      src={src}
      data={data}
      mimes={mimesAudio}
      extensions={extensions}
      muted={muted}
      controls={controls}
      {...props}
    />
  );
};

export default Audio;