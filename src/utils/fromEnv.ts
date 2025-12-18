const fromEnv = async (key: string, fallback = ''): Promise<string> => {
  return import.meta.env[key] ?? fallback;
};

export {fromEnv};