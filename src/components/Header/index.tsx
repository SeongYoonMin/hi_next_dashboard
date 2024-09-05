import { cva } from "cva";
import React from "react";

const headerRecipe = cva("LayoutHeader", {
  variants: {
    intent: {
      primary: ["bg-white text-black"],
    },
    size: {
      medium: ["w-full box-border py-4 px-2"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

const Header: React.FC = () => {
  const routeList = [
    {
      name: "ABOUT",
      href: "/about",
    },
  ];
  return <header className={headerRecipe({})}>HEADER</header>;
};

export default Header;
