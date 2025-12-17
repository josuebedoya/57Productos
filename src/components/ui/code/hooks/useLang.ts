import type {Extension} from '@codemirror/state';
import {langs} from '@uiw/codemirror-extensions-langs';

const useLang = (lang: keyof typeof langs = 'js'): Extension => {
  const langFn = langs[lang];
  if (typeof langFn === 'function') {
    return langFn();
  }

  const defaultFn = langs.js;
  return typeof defaultFn === 'function' ? defaultFn() : ([] as unknown as Extension);
};

export default useLang;