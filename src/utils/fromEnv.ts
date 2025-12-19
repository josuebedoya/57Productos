const fromEnv = (key: string, fallback = ''): string => {
  return import.meta.env[key] ?? fallback;
};

export {fromEnv};