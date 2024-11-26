import React from "react";
import {iSocialMediaSet } from "./social_media_set.d";
import { Icon } from "../Icon/icon_component";

export const SocialMediaSet: React.FC<iSocialMediaSet> = ({
  children,
  orientation,
  backgroundColor = "transparent",
}) => {
  const SocialMediaSetClassName = `${backgroundColor} inline-flex gap-[30px] items-center ${
    orientation === "horizontal" ? "flex-row" : "flex-col"
  }`;

  const defaultIcons = [
    ["instagram", "src/assets/icons/instagram-square-icon.svg"],
    ["twitter-x", "src/assets/icons/twitter-x-square-icon.svg"],
    ["github", "src/assets/icons/githud-square-icon.svg"],
    ["linkedin", "src/assets/icons/linkedin-square-icon.svg"],
  ];

  return (
    <>
      <div className={SocialMediaSetClassName}>
        {children
          ? children
          : defaultIcons.map((icon) => (
              <Icon key={icon[0]} iconName={icon[0]} iconPath={icon[1]} className={`w-7 h-7`}/>
            ))}
      </div>
    </>
  );
};
