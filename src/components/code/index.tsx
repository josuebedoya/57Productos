import React, {useEffect, useState} from 'react';
import CodeMirror from '@uiw/react-codemirror';
import {vscodeLight, tokyoNight} from '@uiw/codemirror-themes-all';
import {color} from '@uiw/codemirror-extensions-color';
import useLang from "@/components/code/hooks/useLang.js";
import clsx from "clsx";
import useAnimatingIcons from "@/components/code/hooks/useAnimatingIcons.tsx";
import useCopyContent from "@/hooks/useCopyContent.tsx";
import IconController from "@/components/code/components/iconController.tsx";
import type {CodeProps} from "@/components/code/types.d.ts";
import '@/styles/components/code/_code.scss'

const CodeBlocks: React.FC<CodeProps> = (
  {children, onChange, language = 'js', editable = false}) => {

  const [isDark, setIsDark] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const animations = {exit: 'animate-fade-up-out', entrance: 'animate-fade-up-in'}

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

          {/*Theme Icon*/}
          <IconController
            active={isDark}
            icon='SunIcon'
            iconActive='MoonIcon'
            isDark={isDark}
            className={`mr-5 ${themeClass}`}
            fallback={themeHandleAnimating}
          />

          {/*Copy Icon*/}
          <IconController
            active={copied}
            icon='CopyCheckIcon'
            iconActive='CopyIcon'
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
            extensions={[useLang(language), color]}
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