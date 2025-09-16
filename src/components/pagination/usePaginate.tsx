import {useState} from "react";
import {useNavigate} from "react-router";

export const usePaginate = (
  countItems: number, defaultSelected: number = 1, query: string, maxPages: number) => {
  const [selected, setSelected] = useState(defaultSelected);
  const nav = useNavigate();

  const fixSelected = (index: number): void => {
    setSelected(index);
  }

  const goToBack = (): void => {
    if (selected <= 1) return;
    fixSelected(selected - 1);
    nav(`?${query}=${selected - 1}`)
  }

  const goToNext = (): void => {
    if (selected >= countItems) return;
    fixSelected(selected + 1);
    nav(`?${query}=${selected + 1}`)
  }

  const handleItems = (): number[] => {

    const itemCenter = Math.floor(maxPages / 2);

    if (selected >= itemCenter) {

    }
  }

  return {selected, fixSelected, goToNext, goToBack};
}

