import { Heading } from ".";

export default {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    level: {
      options: ["two", "three", "four", "one", "five", "six"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: "Heading",
    level: "two",
    className: {},
  },
};
