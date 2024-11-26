import React from "react";
import { iIconProps } from "./icon_component.d";

export const Icon: React.FC<iIconProps> = ({
    iconName,
    iconPath,
    className
}) => {
    return (
        <img
            key={iconName}
            src={iconPath}
            alt={iconName}
            className={`${className || ''}`} //Optional className prop
        />
    )
}