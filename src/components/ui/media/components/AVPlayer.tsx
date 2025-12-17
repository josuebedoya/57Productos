import React from 'react';
import type {AVPlayerProps} from "@ui/media/types.js";

const AvPlayer: React.FC<AVPlayerProps> = (
  {
    type,
    data,
    mimes,
    label,
    events,
    ...props
  }) => {

  const Component = type == 1 ? 'video' : 'audio';

  return (
    <div {...events} className={`f-${Component} h-full w-full`}>
      <Component  {...props}>
        {data?.map((s: Record<string, string>, i: number) => (
          <source
            key={i}
            aria-label={Component}
            srcSet={s.src}
            type={mimes[s.ext || ''] || `${Component}/${s.ext}`}
          />
        ))}

        {label}
      </Component>
    </div>
  );
};

export default AvPlayer;