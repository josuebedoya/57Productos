import {useState, useRef} from "react";
import {useTranslation} from "react-i18next";

const useCopyContent = (value: any, onChange: (e: any) => void) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const lastCopiedValue = useRef<any>(null);

  const {t} = useTranslation();

  const handleCopy = async () => {
    if (!navigator.clipboard) {
      console.warn(t("components.code.errors.noClipBoardAvailable"));
      setError(t("components.code.errors.noClipBoardAvailable"))
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      const text = await navigator.clipboard.readText();
      setError('');

      if (value === text) {
        const isSameAsLast = value === lastCopiedValue.current;

        if (!isSameAsLast) {
          setCopied(true);
          lastCopiedValue.current = value;

          setTimeout(() => {
            if (lastCopiedValue.current !== value) {
              setCopied(false);
            }
          }, 2000);
        } else if (!copied) {
          setCopied(true);
        }
      }
    } catch (err) {
      setError(t("components.code.errors.errorTryingCopy"))
      console.error(t("components.code.errors.errorTryingCopy"), err);
    }
  };

  const codeMirrorProps = {
    value, options: {
      mode: 'javascript', theme: 'material', lineNumbers: true, viewportMargin: Infinity,
    }, onBeforeChange: (_: any, __: any, val: any): void => {
      onChange && onChange(val);
    }
  };

  return {handleCopy, copied, codeMirrorProps, error};
};

export default useCopyContent;
