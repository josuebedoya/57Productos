import React from 'react';
import type {VideoProps} from "@/components/media/types.js";

const Video: React.FC<VideoProps> = (
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
    mp4: "video/mp4",
    webm: "video/webm",
    ogv: "video/ogg",
    mov: "video/quicktime",
  };

  return (
    <div {...events} className='f-video'>
      <video autoPlay={autoPlay} controls={controls} muted={muted} loop={loop} {...props}>

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
      </video>
    </div>
  );
};

export default Video;