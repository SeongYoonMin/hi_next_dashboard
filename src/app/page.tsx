
import { cva } from "cva";

const buttonRecipe = cva("", {
  variants: {
    intent: {
      primary: [
        "bg-blue-500",
        "text-white",
        "border-transparent",
        "hover:bg-blue-600",
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
    rounded: {
      lg: ["rounded-lg"],
      xl: ["rounded-xl"],
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      size: "medium",
      rounded: "lg",
      class: "uppercase",
    },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export default function Home() {
  return (
    <button className={buttonRecipe({ intent: "secondary", rounded: "xl" })}>
      이것은 버튼이여
    </button>
  );
}
