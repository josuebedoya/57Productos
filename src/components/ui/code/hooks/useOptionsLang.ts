const useOptionsLang = (langs: Record<string, () => void>, langsUse: string[]) => {
  const filteredLangs = Object.keys(langs).filter(k => langsUse.includes(k));
  const langsFormatted = Object.values(filteredLangs).map((v) => ({label: v.toUpperCase(), value: v}));

  return {langsFormatted}
};

export default useOptionsLang;