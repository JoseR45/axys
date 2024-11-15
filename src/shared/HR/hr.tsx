import React from "react";
import iHRProps from "./hr.d";

export const HR: React.FC<iHRProps> = ({ from }) => {
  return (
    <hr
      style={{
        border: "none",
        height: "1px",
        backgroundImage: `linear-gradient(${
          from === "left" ? "to left" : "to right"
        }, ${
          from === "center"
            ? "#FFFFFF 0%, #999999 50%, #FFFFFF 100%"
            : "#999999 0%, #FFFFFF 100%"
        })`,
      }}
    />
  );
};
