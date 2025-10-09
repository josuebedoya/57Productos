import type {ComponentType} from "react";

type LibraryIcons =
  Record<string,
    Record<
      string,
      () => Promise<Record<string, ComponentType<any>>>
    >>;

const libraryIcons: LibraryIcons = {
  fa: {
    default: () => import("react-icons/fa") as Promise<any>,
    v6: () => import("react-icons/fa6") as Promise<any>,
  },
  hi: {
    default: () => import("react-icons/hi") as Promise<any>,
    v2: () => import("react-icons/hi2") as Promise<any>,
  },
  io: {
    default: () => import("react-icons/io") as Promise<any>,
    v5: () => import("react-icons/io5") as Promise<any>,
  },
  ai: {default: () => import("react-icons/ai") as Promise<any>},
  bi: {default: () => import("react-icons/bi") as Promise<any>},
  bs: {default: () => import("react-icons/bs") as Promise<any>},
  ci: {default: () => import("react-icons/ci") as Promise<any>},
  cu: {default: () => import("@/components/icons/lib/cu") as Promise<any>}, // This is a custom library
  cg: {default: () => import("react-icons/cg") as Promise<any>},
  di: {default: () => import("react-icons/di") as Promise<any>},
  fc: {default: () => import("react-icons/fc") as Promise<any>},
  fi: {default: () => import("react-icons/fi") as Promise<any>},
  gi: {default: () => import("react-icons/gi") as Promise<any>},
  go: {default: () => import("react-icons/go") as Promise<any>},
  gr: {default: () => import("react-icons/gr") as Promise<any>},
  im: {default: () => import("react-icons/im") as Promise<any>},
  lia: {default: () => import("react-icons/lia") as Promise<any>},
  lu: {default: () => import("react-icons/lu") as Promise<any>},
  md: {default: () => import("react-icons/md") as Promise<any>},
  pi: {default: () => import("react-icons/pi") as Promise<any>},
  ri: {default: () => import("react-icons/ri") as Promise<any>},
  rx: {default: () => import("react-icons/rx") as Promise<any>},
  si: {default: () => import("react-icons/si") as Promise<any>},
  sl: {default: () => import("react-icons/sl") as Promise<any>},
  tb: {default: () => import("react-icons/tb") as Promise<any>},
  tfi: {default: () => import("react-icons/tfi") as Promise<any>},
  ti: {default: () => import("react-icons/ti") as Promise<any>},
  vsc: {default: () => import("react-icons/vsc") as Promise<any>},
  wi: {default: () => import("react-icons/wi") as Promise<any>},
};

export default libraryIcons;