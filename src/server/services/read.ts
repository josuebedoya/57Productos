async function read(lib: string, locale: string) {
  return (await import(`../data/${lib}/${locale}`)).default;
}

export default read;