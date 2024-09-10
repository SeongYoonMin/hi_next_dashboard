import type { Meta, StoryObj } from "@storybook/react";
import Index from "./index";
import { fn } from "@storybook/test";

const meta = {
  component: Index,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    intentRecipe: "primary",
    sizeRecipe: "medium",
  },
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    intentRecipe: "primary",
    sizeRecipe: "medium",
  },
};

export const Secondary: Story = {
  args: {
    intentRecipe: "secondary",
    sizeRecipe: "medium",
  },
};

export const Small: Story = {
  args: {
    intentRecipe: "primary",
    sizeRecipe: "small",
  },
};

export const Large: Story = {
  args: {
    intentRecipe: "primary",
    sizeRecipe: "large",
  },
};
