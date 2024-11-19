import React from "react";
import iLineProps from "./line.d"

export const Line: React.FC<iLineProps> = ({orientation, length}) => {
    const props = () => {
        if (orientation == "Horizontal"){
            return {'w': `${length}`, 'h': "1px"} 
        } else {
            return {'w': "1px", 'h': `${length}`}
        }
    }
    return(
        <div 
        className={`border-dashed border-2`} 
        style={{
            width: "1px",
            height: "34px",
        }}>
            
        </div>
    )
}