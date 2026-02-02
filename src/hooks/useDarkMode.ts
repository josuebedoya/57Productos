import {Dispatch, SetStateAction, useEffect, useState} from "react";

function useDarkMode(): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [dark, setDark] = useState<boolean>(() => {
    const saved = localStorage?.getItem("theme");
    if (saved) {
      return saved === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage?.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage?.setItem("theme", "light");
    }
  }, [dark]);

  return [dark, setDark];
}

export default useDarkMode;