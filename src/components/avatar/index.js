import React from "react";
import classnames from "classnames";
import { AVATAR_SIZES, AVATAR_SIZE_MAP } from "../../helpers/constants";

export default (props) => {
  const { className, link, icon, size } = props;

  let content = <div />;

  if (link) {
    content = <img src={link} alt="avatar" />;
  } else if (icon) {
    const TagName = icon;
    content = <TagName className="profile"/>;
  }

  const classes = classnames(
    "avatar",
    "rounded-circle",
    "bg-muted",
    className,
    `avatar-${size && AVATAR_SIZES.includes(size) ? size : AVATAR_SIZE_MAP.MD}`
  );

  return <div className={classes}>{content}</div>;
};
