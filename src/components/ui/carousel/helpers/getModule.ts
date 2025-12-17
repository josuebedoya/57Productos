import swiperModules from "@ui/carousel/configs/swiperModules.ts";
import swiperModuleCss from "@ui/carousel/configs/swiperModulesCss.ts";

const getModule = (name: string, isEffect?: boolean, moduleCss?: boolean): any | undefined => {
  const useName = isEffect ? `Effect${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}` : name;
  const nName = useName.toLowerCase().trim();

  const useMod = moduleCss ? swiperModuleCss : swiperModules;
  const modLib = Object.keys(useMod).find(k => k.toLowerCase().trim() === nName);

  return modLib ? (useMod as Record<string, any>)[modLib] : undefined;
}

export default getModule;