import React from "react";
import iSectionEndProps from "./section_end.d";

export const SectionEnd: React.FC<iSectionEndProps> = ({ children, from }) => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          width: "80%",
          transform: from === "right" ? "rotateZ(180deg)" : "rotateZ(0deg)",
          order: from === "left" ? "1" : "2",
        }}
      >
        <hr
          style={{
            border: "none",
            height: "1px",
            background: "linear-gradient(to right, #999999 0%, #FFFFFF 100%)",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: from === "left" ? "start" : "end",
          alignItems: "center",
          order: from === "left" ? "2" : "1",
          width: "20%",
        }}
      >
        {children}
      </div>
    </div>
  );
};
