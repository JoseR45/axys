import React from "react";
import iLineProps from "./line.d"

export const Line: React.FC<iLineProps> = ({orientation, length}) => {
    
    return(
        <div style={{
            width: "34px",
        }}>
            {orientation}{length}
        </div>
    )
}