import {vars} from "../variables.js";

const isCustomValue = (val: string): boolean => {
  const isTailwindArbitrary = /\[\s*[^]+\s*\]/.test(val);

  const isRawColor = /^#|^rgb\(|^hsl\(/.test(val);

  return isTailwindArbitrary || isRawColor;
};
const gVar = (path: string | number): string => {
  if (!path) return "";

  const sPath = String(path).trim();

  const keys = sPath.split(".");
  let obj: any = vars;
  let lastKey = keys[keys.length - 1] || '';

  if (isCustomValue(lastKey)) return lastKey;

  for (let key of keys) {
    // Return the path if the key does not exist
    if (!obj[key] || obj == null) return sPath;

    // Traverse the object
    obj = obj[key];
  }

  return obj;
}

export {gVar};