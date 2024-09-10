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
    colorRecipe: "primary",
  },
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    colorRecipe: "primary",
  },
};

export const Secondary: Story = {
  args: {
    colorRecipe: "secondary",
  },
};
