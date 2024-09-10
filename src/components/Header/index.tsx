import { cva } from "cva";
import React from "react";

const headerRecipe = cva("LayoutHeader", {
  variants: {
    intent: {
      primary: ["bg-white text-black"],
      secondary: ["bg-white text-red-500"],
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

const Header: React.FC<{ colorRecipe: "primary" | "secondary" }> = ({
  colorRecipe,
}) => {
  return (
    <header className={headerRecipe({ intent: colorRecipe })}>HEADER</header>
  );
};

export default Header;
