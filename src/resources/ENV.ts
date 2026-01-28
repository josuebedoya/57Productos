export const ENV = (key: string): string => {
  const value = process.env[key];
  
  if (!value) {
    console.warn(`Environmssent variable ${key} is not defined`);
    return '';
  }
  
  return value;
}