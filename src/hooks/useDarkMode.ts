import {Dispatch, SetStateAction, useEffect, useState} from "react";

function useDarkMode(): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage?.getItem("theme");
    if (saved) {
      setDark(saved === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
    }
  }, []);

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