import React from "react";
import { Icon, iSocialMediaSet } from "./social_media_set.d";

export const SocialMediaSet: React.FC<iSocialMediaSet> = ({
  children,
  orientation,
  backgroundColor = "transparent",
}) => {
  const SocialMediaSetClassName = `${backgroundColor} inline-flex gap-[30px] items-center ${
    orientation === "horizontal" ? "flex-row" : "flex-col"
  }`;

  const defaultIcons: Icon[] = [
    ["instagram", "src/assets/icons/instagram-square-icon.svg"],
    ["twitter", "src/assets/icons/twitter-x-square-icon.svg"],
    ["githud", "src/assets/icons/githud-square-icon.svg"],
    ["linkedin", "src/assets/icons/linkedin-square-icon.svg"],
  ];

  return (
    <>
      <div className={SocialMediaSetClassName}>
        {children
          ? children
          : defaultIcons.map((icon) => (
              <img key={icon[0]} src={icon[1]} className={`w-7 h-7`} />
            ))}
      </div>
    </>
  );
};
