import { cva } from "cva";
import React from "react";

const headerRecipe = cva("LayoutHeader", {
  variants: {
    intent: {
      primary: ["bg-white text-black"],
      secondary: ["bg-white text-red-500"],
    },
    size: {
      small: ["w-full box-border py-2 px-1"],
      medium: ["w-full box-border py-4 px-2"],
      large: ["w-full box-border py-6 px-3"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

interface IHeaderIndex {
  intentRecipe: "primary" | "secondary";
  sizeRecipe: "small" | "medium" | "large";
}

const Header: React.FC<IHeaderIndex> = ({ intentRecipe, sizeRecipe }) => {
  return (
    <header
      className={headerRecipe({ intent: intentRecipe, size: sizeRecipe })}
    >
      HEADER
    </header>
  );
};

export default Header;
