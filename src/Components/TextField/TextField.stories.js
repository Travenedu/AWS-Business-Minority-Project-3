import { TextField } from ".";

export default {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    size: {
      options: ["large", "small", "default"],
      control: { type: "select" },
    },
    variation: {
      options: ["quiet", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "large",
    isDisabled: true,
    labelHidden: true,
    variation: "quiet",
    text: "Placeholder",
    inputType: "text",
    inputType1: "text",
  },
};
