import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["large", "small", "default"],
      control: { type: "select" },
    },
    variation: {
      options: ["warning", "destructive", "default", "primary", "link"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: "Button",
    size: "large",
    isDisabled: true,
    variation: "warning",
    className: {},
  },
};
