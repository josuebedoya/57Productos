import {cva} from "class-variance-authority";

export const liStyles = cva("nav-item relative", {
  variants: {
    active: {true: ""},
    open: {true: "open"},
    hasChildren: {true: "has-child"},
  },
});

export const linkStyles = cva(
  "nav-link flex items-center px-3 py-2 text-inherit",
  {
    variants: {
      hasChildren: {true: "relative"},
    },
  }
);

export const dropdownStyles = cva(
  "transition-all duration-500 ease-out px-4  lg:px-7 lg:py-4 min-w-max max-w-8",
  {
    variants: {
      mobile: {
        true: "relative bg-white w-full overflow-hidden",
        false: "absolute z-10 bg-white rounded-xl shadow-xl",
      },
      open: {
        true: "opacity-100 pointer-events-auto",
        false: "opacity-0 pointer-events-none",
      },
    },
    compoundVariants: [
      {
        mobile: false,
        open: true,
        class: "translate-y-0",
      },
      {
        mobile: false,
        open: false,
        class: "-translate-y-4",
      },
      {
        mobile: true,
        open: true,
        class: "max-h-screen my-2",
      },
      {
        mobile: true,
        open: false,
        class: "max-h-0 overflow-hidden",
      },
    ],
  }
);
