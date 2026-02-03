import {cva} from "class-variance-authority";

export const navStyles = cva("menu");

export const listStyles = cva("nav-list flex m-0", {
  variants: {
    direction: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
    mobileCollapsible: {
      true: "flex-col",
      false: "",
    },
  },
});

export const mobilePanelStyles = cva(
  "modal fixed z-50 bg-white w-1/2 min-w-72 left-0 top-0 h-screen overflow-hidden shadow-xl transition-transform duration-300 ease-in-out",
  {
    variants: {
      open: {
        true: "translate-x-0",
        false: "-translate-x-full",
      },
    },
  }
);
