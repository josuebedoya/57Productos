import React from 'react';
import type {AudioProps} from "@/components/media/types.js";

const Video: React.FC<AudioProps> = (
  {
    src,
    extensions = ['mp4'],
    autoPlay,
    controls = true,
    loop,
    muted = true,
    events,
    unsupportedLabel = 'Tu navegador no soporta videos.',
    ...props
  }: VideoProps): React.ReactElement => {

  const mimeMap: Record<string, string> = {
    mp3: "audio/mpeg",
    wav: "audio/wav",
    ogv: "audio/ogg",
  };

  return (
    <div {...events} className='f-audio'>
      <audio autoPlay={autoPlay} controls={controls} muted={muted} loop={loop} {...props}>

        {/* HERE MAP THE ALLOWED EXTENSIONS TO RENDER BY FILE*/}
        {extensions.map((ext: string) => {
          const newSrc = src?.split('.').shift();
          return (
            <source
              key={ext}
              src={`${newSrc}.${ext}`}
              type={mimeMap[ext] || `video/${ext}`}
            />
          )
        })}

        {unsupportedLabel}
      </audio>
    </div>
  );
};

export default Video;