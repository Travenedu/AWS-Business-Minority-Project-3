import { Divider } from ".";

export default {
  title: "Components/Divider",
  component: Divider,
  argTypes: {
    size: {
      options: ["default", "large", "small"],
      control: { type: "select" },
    },
    orientation: {
      options: ["vertical", "horizontal"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "default",
    orientation: "vertical",
    className: {},
  },
};
