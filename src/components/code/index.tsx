import React, {useEffect, useState} from 'react';
import {materialDark, materialLight} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {Prism as Code} from 'react-syntax-highlighter';
import {Controlled as CodeMirror} from "react-codemirror2";
import clsx from "clsx";
import useAnimatingIcons from "@/components/code/hooks/useAnimatingIcons.js";
import useCopyContent from "@/hooks/useCopyContent.js";
import IconController from "@/components/code/components/iconController.js";
import type {CodeProps} from "@/components/code/types.js";

const CodeBlocks = ({children, onChange, language = 'javascript', editable}: CodeProps) => {

  const [isDark, setIsDark] = useState<boolean>(false);
  const handleDark = () => setIsDark(prev => !prev);
  const [value, setValue] = useState<React.ReactNode>(null);
  const animations = {exit: 'animate-fade-up-out', entrance: 'animate-fade-up-in'}

  const handleContent = (e: any) => {
    setValue(e)
    onChange && onChange(e);
  }

  // Theme animation controller
  const {animationClass: themeClass, handleAnimating: themeHandleAnimating} = useAnimatingIcons({
    animations,
    timeDelay: 300,
    fallback: handleDark
  });

  // Copy content & animation controller
  const {copied, handleCopy, codeMirrorProps, error} = useCopyContent(value, handleContent);
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
          className="head flex items-center justify-end px-4 py-3 shadow-custom shadow-gray-900 -mb-0.5 z-10 relative bg-white dark:bg-gray-900 dark:shadow-white overflow-hidden">

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

        <div className="code z-20">
          {editable ? (<CodeMirror key="main-editor" {...codeMirrorProps} />) : (
            <Code language={language} style={isDark ? materialDark : materialLight}
                  className='z-0 my-0 py-5' children={children}/>)}
          <style>
            {` .react-codemirror2 > .CodeMirror:first-of-type{ display:none; } `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;