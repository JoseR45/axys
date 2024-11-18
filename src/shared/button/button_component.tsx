import React, { useState } from "react";
import iButtonProps from "./button_component";
import "./button_component_styles.css"

export const Button: React.FC<iButtonProps> = () => {
    const [count,setCount] = useState(0);
    
    return (
        <button id="btn-generic" onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
    )
} 