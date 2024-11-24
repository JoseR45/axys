import React from "react";
import { iTextProps } from "./text.d";

export const Text: React.FC<iTextProps> = ({
  value,
  color,
  size,
  family = "Helvetica Compressed",
  weight,
  lineHeight,
  textAlign,
  className,
}) => {
  return (
    <p
      className={`w-full break-words ${color} relative z-30 ${className}`}
      style={{
        fontFamily: `${family}, sans-serif`,
        fontSize: `${size? size: 'none'}`,
        color: `${color}`,
        fontWeight: `${weight}`,
        lineHeight: `${lineHeight}` || 'normal',
        textAlign: `${textAlign}`,
      }}
    >
      {value}
    </p>
  );
};
