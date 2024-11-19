import React from "react";
import iCircleProps from "./circle.d";

export const Circle: React.FC<iCircleProps> = ({ radio, color, border, to }) => {
  const bg_color = () => {
    if (color == "white") {
      return border ? "border-secundary" : "bg-secundary";
    } else if (color == "black") {
      return border ? "border-primary" : "bg-primary";
    } else {
      return "";
    }
  };

  return (
    <div
      className={`${bg_color()} rounded-full ${border} ${border&& "border-[2px]"}`}
      style={{
        width: `${radio * 2}px`,
        height: `${radio * 2}px`,
        minWidth: `${radio * 2}px`,
        minHeight: `${radio * 2}px`,
        maxHeight: `${radio * 2}px`,
        
        maskImage: `${border ? `linear-gradient(to ${to}, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))`: 'none'}`,
        WebkitMaskImage: `${border ? `linear-gradient(to ${to}, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))`: 'none'}`,

      }}
    ></div>
  );
};
