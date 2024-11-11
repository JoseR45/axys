import iTextProps from "./text.d";
import React from "react";

export const Text: React.FC<iTextProps> = ({value, color, size, font}) =>{
    return(
        <label className="w-full" style={{
            fontFamily: `${font}`,
            fontSize:`${size}`,
            color: `${color}`,
        }}>
            {value}
        </label>
    );
}