const formattedSrc = (src: string | undefined, extensions: string[]): Record<string, string>[] => {
  if (!src || !extensions.length) return [{src: '', ext: ''}];

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    return extensions?.map(ext => ({src, ext: ''}));
  }

  try {
    const url = new URL(src, window.location.origin);
    const path = url.pathname;
    const withoutExt = path.substring(0, url.pathname.lastIndexOf("."))
    return extensions?.map(ext => ({
      src: `${url.origin}${withoutExt}.${ext}`,
      ext
    }));

  } catch (e) {
    console.error('Error trying to formatted src:  ', e);
    return extensions?.map(ext => ({src, ext}));
  }
}

export default formattedSrc;