import React from "react";
import iTextProps from "./text.d";

export const Text: React.FC<iTextProps> = ({
  className,
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
      className={`${className || ''}`} // Extended functionality by LeudiX
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
