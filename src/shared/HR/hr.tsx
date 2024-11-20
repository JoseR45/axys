import React from "react";
import iHRProps from "./hr.d";

export const HR: React.FC<iHRProps> = ({ from, className }) => {
  return (
    <hr
      className={className}
      style={{
        border: "none",
        height: "1px",
        backgroundImage: `linear-gradient(${
          from === "left" ? "to left" : "to right"
        }, ${
          from === "center"
            ? "rgba(153, 153, 153, 0) 0%, rgba(255, 255, 255, 1) 50%, rgba(153, 153, 153, 0) 100%"
            : "rgba(153, 153, 153, 0) 0%, rgba(255, 255, 255, 1) 100%"
        })`,
      }}
    />
  );
};
