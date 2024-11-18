import React, { useState } from "react";
import iButtonProps from "./button_component.d";
import "./button_component_styles.css"

export const Button: React.FC<iButtonProps> = ({ value,className }) => {
    const [count, setCount] = useState(0);

    return (
        <button id="btn-generic"
            className={`${className || ''}`} // Extended functionality by LeudiX
            onClick={() => setCount((count) => count + 1)}>
            {value} : {count}
        </button>
    )
} 