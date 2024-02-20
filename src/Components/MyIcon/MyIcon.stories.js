import { MyIcon } from ".";

export default {
  title: "Components/MyIcon",
  component: MyIcon,
  argTypes: {
    type: {
      options: [
        "dashboard",
        "info",
        "twitter",
        "content",
        "delete",
        "storage",
        "phone",
        "reply",
        "authentication",
        "share",
        "chat-bubble-outline",
        "group",
        "notification",
        "more-vert",
        "send",
        "shuffle",
        "location",
        "close",
        "arrow-right",
        "function",
        "alert",
        "warning",
        "chat",
        "favorite-border",
        "favorite",
        "more-horiz",
        "checkmark",
        "data",
        "home",
        "bookmark-border",
        "email",
        "edit",
        "settings",
        "instagram",
        "shopping-bag",
        "file",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "dashboard",
  },
};
