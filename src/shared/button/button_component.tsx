//import React, { useState } from "react";
import iButtonProps from "./button_component.d";


export const Button: React.FC<iButtonProps> = ({ children, className }) => {
    //const [count, setCount] = useState(0);

    return (
        <button id="btn-generic"
            className={`${className || ''}`} //Optional className prop
            style={{
                padding: "10px 30px",
                borderRadius: "50px",
                border: "2px solid rgba(255,255,255, 0.6)"  
            }}
        >
        {children}
        </button>
    )
} 