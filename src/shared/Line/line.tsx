import React from "react";
import iLineProps from "./line.d";

export const Line: React.FC<iLineProps> = ({ orientation, length, className }) => {
  const props = () => {
    if (orientation == "Horizontal") {
      return { w: `${length}px`, h: "0px" };
    }
    return { w: "0px", h: `${length}px` };
  };
  return (
    <div
      className={`border-dashed border-secundary border-[1px] ${className}`}
      style={{
        width: `${props()["w"]}`,
        height: `${props()["h"]}`,
      }}
    ></div>
  );
};
