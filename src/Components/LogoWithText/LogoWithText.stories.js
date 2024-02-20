import { LogoWithText } from ".";

export default {
  title: "Components/LogoWithText",
  component: LogoWithText,
  argTypes: {
    color: {
      options: ["neutral", "brand"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    color: "neutral",
    colorNeutralClassName: {},
    logoClassName: {},
  },
};
