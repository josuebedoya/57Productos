const fromEnv = (key: string, fallback = ''): string => {
  console.log(import.meta.env[key] )
  return import.meta.env[key] ?? fallback;
};

export {fromEnv};