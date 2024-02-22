import { TextAreaField } from ".";

export default {
  title: "Components/TextAreaField",
  component: TextAreaField,
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
    className: {},
    text: "Label",
    text1: "Placeholder",
  },
};
