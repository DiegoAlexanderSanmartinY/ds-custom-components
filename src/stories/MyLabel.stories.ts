import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
  title: "UI/labels/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["normal", "h1", "h2", "h3"],
      control: { type: "select" },
    },
    color: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "select" },
    },
    fontColor: { control: "color" },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic Label",
  },
};
export const AllCaps: Story = {
  args: {
    label: "All Caps Label",
    allCaps: true,
  },
};
export const Secondary: Story = {
  args: {
    label: "Secondary Label",
    fontColor: "red",
  },
};
export const CustomColor: Story = {
  args: {
    label: "Custom Color",
    size: "normal",
  },
};
