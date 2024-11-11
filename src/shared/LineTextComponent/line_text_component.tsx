import React from "react";
import LineTextProps from "./line_text_component.d";

export const LineTextComponent: React.FC<LineTextProps> = () => {
  return (
    <div style={{ borderRadius: "10px", overflow: "hidden" }}>
      <hr
        style={{
          border: "none",
          height: "1px",
          background: "linear-gradient(to right, #999999 0%, #FFFFFF 100%)",
        }}
      />
    </div>
  );
};
