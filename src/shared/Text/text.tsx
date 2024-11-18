import React from "react";
import iTextProps from "./text.d";

export const Text: React.FC<iTextProps> = ({
  value,
  color,
  size,
  family = "Helvetica Compressed",
  weight,
  lineHeight,
  textAlign,
}) => {
  return (
    <p
      className={`w-full break-words ${color} relative z-30`}
      style={{
        fontFamily: `${family}, sans-serif`,
        fontSize: `${size}`,
        color: `${color}`,
        fontWeight: `${weight}`,
        lineHeight: `${lineHeight}`,
        textAlign: `${textAlign}`,
      }}
    >
      {value}
    </p>
  );
};
