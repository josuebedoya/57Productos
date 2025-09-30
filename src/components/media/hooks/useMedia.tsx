import {useEffect, useState} from "react";
import getMedia from "@/components/media/helpers/getMedia.ts";

const useMedia = (src: string, ext: string[]): Record<string, string> => {
  const [media, setMedia] = useState<Record<string, string>>({fileSrc: '', typeFile: ''});

  const loadMedia = async (): Promise<void> => {
    const result = await getMedia(src, ext || []);
    setMedia(result);
  };

  useEffect(() => {
    loadMedia();
  }, [src, ext]);
  return media;
};

export default useMedia;