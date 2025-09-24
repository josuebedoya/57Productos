import React from 'react';
import type {AVPlayerProps} from "@/components/media/types.js";

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
    <div {...events} className={`f-${Component}`}>
      <Component  {...props}>
        {data?.map((s: Record<string, string>, i: number) => (
          <source
            key={i}
            src={s.src}
            type={mimes[s.ext || ''] || `${Component}/${s.ext}`}
          />
        ))}

        {label}
      </Component>
    </div>
  );
};

export default AvPlayer;