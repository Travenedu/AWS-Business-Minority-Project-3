import { HeroLayout } from ".";

export default {
  title: "Components/HeroLayout",
  component: HeroLayout,
  argTypes: {
    mode: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    mode: "dark",
    className: {},
    eyebrowClassName: {},
  },
};
