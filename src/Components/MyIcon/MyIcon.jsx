/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Myicon } from "../../icons/Myicon";
import { TypeAlert } from "../../icons/TypeAlert";
import { TypeArrowRight } from "../../icons/TypeArrowRight";
import { TypeBookmarkBorder } from "../../icons/TypeBookmarkBorder";
import { TypeChat } from "../../icons/TypeChat";
import { TypeChatBubbleOutline } from "../../icons/TypeChatBubbleOutline";
import { TypeCheckmark1 } from "../../icons/TypeCheckmark1";
import { TypeClose } from "../../icons/TypeClose";
import { TypeContent } from "../../icons/TypeContent";
import { TypeDashboard } from "../../icons/TypeDashboard";
import { TypeData } from "../../icons/TypeData";
import { TypeDelete } from "../../icons/TypeDelete";
import { TypeEdit } from "../../icons/TypeEdit";
import { TypeEmail } from "../../icons/TypeEmail";
import { TypeFavorite } from "../../icons/TypeFavorite";
import { TypeFavoriteBorder } from "../../icons/TypeFavoriteBorder";
import { TypeFile } from "../../icons/TypeFile";
import { TypeGroup } from "../../icons/TypeGroup";
import { TypeHome } from "../../icons/TypeHome";
import { TypeInfo1 } from "../../icons/TypeInfo1";
import { TypeMoreHoriz } from "../../icons/TypeMoreHoriz";
import { TypeMoreVert } from "../../icons/TypeMoreVert";
import { TypeNotification } from "../../icons/TypeNotification";
import { TypePhone } from "../../icons/TypePhone";
import { TypeReply } from "../../icons/TypeReply";
import { TypeSend } from "../../icons/TypeSend";
import { TypeSettings } from "../../icons/TypeSettings";
import { TypeShare } from "../../icons/TypeShare";
import { TypeShoppingBag } from "../../icons/TypeShoppingBag";
import { TypeShuffle } from "../../icons/TypeShuffle";
import { TypeStorage } from "../../icons/TypeStorage";
import { TypeTwitter } from "../../icons/TypeTwitter";
import { TypeWarning1 } from "../../icons/TypeWarning1";
import "./style.css";

export const MyIcon = ({ type }) => {
  return (
    <>
      {type === "warning" && <TypeWarning1 className="instance-node" color="#5C6670" />}

      {type === "alert" && <TypeAlert className="instance-node" color="#5C6670" />}

      {type === "info" && <TypeInfo1 className="instance-node" color="#5C6670" />}

      {type === "chat" && <TypeChat className="instance-node" />}

      {type === "checkmark" && <TypeCheckmark1 className="instance-node" color="#5C6670" />}

      {type === "favorite-border" && <TypeFavoriteBorder className="instance-node" />}

      {type === "more-vert" && <TypeMoreVert className="instance-node" />}

      {type === "bookmark-border" && <TypeBookmarkBorder className="instance-node" />}

      {type === "share" && <TypeShare className="instance-node" />}

      {type === "arrow-right" && <TypeArrowRight className="instance-node" />}

      {type === "reply" && <TypeReply className="instance-node" />}

      {type === "chat-bubble-outline" && <TypeChatBubbleOutline className="instance-node" />}

      {type === "send" && <TypeSend className="instance-node" />}

      {type === "favorite" && <TypeFavorite className="instance-node" />}

      {type === "shuffle" && <TypeShuffle className="instance-node" />}

      {type === "more-horiz" && <TypeMoreHoriz className="instance-node" />}

      {type === "group" && <TypeGroup className="instance-node" />}

      {type === "close" && <TypeClose className="instance-node" color="#5C6670" />}

      {type === "shopping-bag" && <TypeShoppingBag className="instance-node" />}

      {type === "delete" && <TypeDelete className="instance-node" />}

      {type === "edit" && <TypeEdit className="instance-node" />}

      {type === "dashboard" && <TypeDashboard className="instance-node" />}

      {type === "settings" && <TypeSettings className="instance-node" />}

      {type === "notification" && <TypeNotification className="instance-node" />}

      {type === "twitter" && <TypeTwitter className="instance-node" />}

      {type === "instagram" && <Myicon className="instance-node" />}

      {type === "email" && <TypeEmail className="instance-node" />}

      {type === "phone" && <TypePhone className="instance-node" />}

      {["authentication", "function", "location"].includes(type) && (
        <div className="my-icon">
          <img
            className={`union type-${type}`}
            alt="Union"
            src={
              type === "function"
                ? "/img/union-2.svg"
                : type === "authentication"
                ? "/img/union-1.svg"
                : "/img/union-3.svg"
            }
          />
        </div>
      )}

      {type === "content" && <TypeContent className="instance-node" />}

      {type === "file" && <TypeFile className="instance-node" />}

      {type === "storage" && <TypeStorage className="instance-node" />}

      {type === "data" && <TypeData className="instance-node" />}

      {type === "home" && <TypeHome className="instance-node" />}
    </>
  );
};

MyIcon.propTypes = {
  type: PropTypes.oneOf([
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
  ]),
};
