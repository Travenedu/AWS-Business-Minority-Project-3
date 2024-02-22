import { CheckboxField } from ".";

export default {
  title: "Components/CheckboxField",
  component: CheckboxField,
  argTypes: {
    size: {
      options: ["large", "small", "default"],
      control: { type: "select" },
    },
    labelPosition: {
      options: ["end", "start"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "large",
    defaultChecked: true,
    isDisabled: true,
    labelPosition: "end",
    className: {},
    text: "Checkbox",
  },
};
