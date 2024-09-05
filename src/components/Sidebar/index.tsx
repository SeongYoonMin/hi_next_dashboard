import { cva } from "cva";
import Link from "next/link";
import React from "react";

const sideRecipe = cva("main_side_bar", {
  variants: {
    intent: {
      primary: ["bg-red-400"],
    },
    size: {
      medium: ["w-[200px] h-full min-h-screen p-4 box-border"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

const linkRecipe = cva("", {
  variants: {
    intent: {
      primary: ["text-black hover:text-white duration-300"],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

const Sidebar: React.FC = () => {
  const routeList = [
    {
      name: "ABOUT",
      href: "/about",
    },
  ];
  return (
    <aside className={sideRecipe({})}>
      {routeList.map((route, index) => (
        <Link key={index} href={route.href} className={linkRecipe({})}>
          {route.name}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
