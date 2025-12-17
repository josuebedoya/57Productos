import React, {useEffect, useState} from 'react';
import CodeMirror from '@uiw/react-codemirror';
import {vscodeLight, tokyoNight} from '@uiw/codemirror-themes-all';
import {color} from '@uiw/codemirror-extensions-color';
import {langs} from '@uiw/codemirror-extensions-langs';
import useLang from "@ui/code/hooks/useLang.js";
import clsx from "clsx";
import useAnimatingIcons from "@ui/code/hooks/useAnimatingIcons.tsx";
import useCopyContent from "@/hooks/useCopyContent.tsx";
import IconController from "@ui/code/components/iconController.tsx";
import type {CodeProps} from "@ui/code/types.d.ts";
import '@/styles/components/code/_code.scss'
import {useTranslation} from "react-i18next";
import Select from "@ui/input/fields/select/index.js";
import defaultLangs from "@ui/code/configs/defaultLangs.ts";
import useOptionsLang from "@ui/code/hooks/useOptionsLang.js";

const CodeBlocks: React.FC<CodeProps> = (
  {children, onChange, language = 'js', editable = false, langsToUse}) => {

  const [isDark, setIsDark] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const animations = {exit: 'animate-fade-up-out', entrance: 'animate-fade-up-in'}
  const {t} = useTranslation();
  const [langActive, setLangActive] = useState(language);
  const {langsFormatted} = useOptionsLang(langs, langsToUse || defaultLangs);

  const handleContent = (e: any) => {
    setValue(e)
    onChange && onChange(e);
  }

  // Theme animation controller
  const {animationClass: themeClass, handleAnimating: themeHandleAnimating} = useAnimatingIcons({
    animations,
    timeDelay: 300,
    fallback: (): void => setIsDark((prev: boolean) => !prev)
  });

  // Copy content & animation controller
  const {copied, handleCopy, error} = useCopyContent(value, handleContent);
  const {animationClass: copyClass, handleAnimating: copyHandleAnimating} = useAnimatingIcons({
    animations,
    timeDelay: 300,
    fallback: handleCopy
  });

  // Lang controller
  const handleLangChange = (e: any) => {
    setLangActive(e.target.value);
  }
  const {animationClass: langClass, handleAnimating: LangHandleAnimating} = useAnimatingIcons({
    animations,
    timeDelay: 300,
    fallback: () => handleLangChange
  });

  // Controller content
  useEffect(() => {
    children && setValue(children);
  }, [children]);

  return (
    <div className={clsx('px-4', {'dark': isDark})}>
      <div className="code-block rounded-xl overflow-hidden shadow-custom my-4 lg:my-8">
        <span className='text-sm text-red-500'>{error && error}</span> {/* Toca cambiar que se muestre en modal**/}
        <div
          className="head flex items-center justify-end px-4 py-3 shadow-custom shadow-gray-900 -mb-0.5 z-20 relative bg-white dark:bg-gray-900 dark:shadow-white overflow-hidden">

          {/*Lang Icon*/}
          <div className="flex">
            <span className='text-sm font-bold capitalize mr-3 dark:text-white'>{langActive}</span>
            <IconController
              label={t('components.code.controller.lang')}
              active={isDark}
              icon='TbLanguageKatakana'
              iconActive='TbLanguageKatakana'
              isDark={isDark}
              className={`mr-5 ${langClass}`}
              fallback={LangHandleAnimating}
            >
              <Select
                name='languaje'
                className='absolute opacity-0 -left-5 -top-10 rounded-md'
                labelClassName='opacity-0'
                defaultValue={langActive}
                value={langActive}
                options={langsFormatted}
                onChange={e => handleLangChange(e)}
              />
            </IconController>
          </div>

          {/*Theme Icon*/}
          <IconController
            label={t('components.code.controller.theme')}
            active={isDark}
            icon='MdSunny'
            iconActive='IoMdMoon'
            isDark={isDark}
            className={`mr-5 ${themeClass}`}
            fallback={themeHandleAnimating}
          />

          {/*Copy Icon*/}
          <IconController
            label={copied ? t('components.code.controller.copied') : t('components.code.controller.copy')}
            active={copied}
            icon='FaCopy'
            iconActive='LuCopyCheck'
            isDark={isDark}
            className={copyClass}
            fallback={() => (value && !copied) && copyHandleAnimating()}
          />
        </div>

        <div className="code-mirror z-10 relative">
          <CodeMirror
            value={value}
            height="auto"
            editable={editable}
            maxHeight='800px'
            theme={isDark ? tokyoNight : vscodeLight}
            extensions={[useLang(langActive), color]}
            onChange={(val) => handleContent(val)}
            basicSetup={{
              lineNumbers: true,
              highlightActiveLine: true,
              foldGutter: true,
              closeBrackets: true,
              indentOnInput: true,
              autocompletion: true,
              highlightSelectionMatches: true,
              tabSize: 2,
            }}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;