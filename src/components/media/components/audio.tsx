import React from 'react';
import type {AudioProps} from "@/components/media/types.js";
import formattedSrc from "@/components/media/helpers/formattedSrc.ts";
import AVPlayer from "@/components/media/components/AVPlayer.js";

const Audio: React.FC<AudioProps> = (
  {
    src,
    extensions = ['mp3'],
    controls = true,
    muted = true,
    unsupportedLabel = 'Tu navegador no soporta videos.',
    ...props
  }: AudioProps): React.ReactElement => {

  const mimeMap: Record<string, string> = {
    mp3: "audio/mpeg",
    wav: "audio/wav",
    ogv: "audio/ogg",
  };

  const data = formattedSrc(src, extensions || ['mp3']);

  return (
    <AVPlayer
      type={2}
      src={src}
      data={data}
      mimes={mimeMap}
      extensions={extensions}
      muted={muted}
      controls={controls}
      {...props}
    />
  );
};

export default Audio;