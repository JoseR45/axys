//import React, { useState } from "react";
import iButtonProps from "./button_component.d";
import "./button_component_styles.css"

export const Button: React.FC<iButtonProps> = ({ children, className }) => {
    //const [count, setCount] = useState(0);

    return (
        <button id="btn-generic"
            className={`${className || ''}`} //Optional className prop
        >
        {children}
        </button>
    )
} 