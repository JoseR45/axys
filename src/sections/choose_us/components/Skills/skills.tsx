import React from "react";
import { Circle } from "../../../../shared/Circle/circle";
import iSkillsProps from "./skills.d"
import postgres from "../../../../assets/icons/dbs-postgresql-svgrepo-com.svg"
import react from "../../../../assets/icons/react-svgrepo-com.svg"
import tailwind from "../../../../assets/icons/tailwind-css-svgrepo-com.svg"
import ts from "../../../../assets/icons/language-typescript-svgrepo-com.svg"
import python from "../../../../assets/icons/python-127-svgrepo-com.svg"
import django from "../../../../assets/icons/django-icon-svgrepo-com.svg"

const iconosList = [
    django,
    python,
    ts,
    tailwind,
    react,
    postgres,
  ];

export const Skills:React.FC<iSkillsProps> = ({isMobile}) => {

    return(
        <div className="relative w-[450px] h-[450px] min-h-[450px] min-w-[450px] flex items-center justify-center">
        <Circle radio={200} color="white" border="border-dashed" to={isMobile?"top":"right" }/>
        
        {iconosList.map( (icon, index) =>{   
            let deg = 180/iconosList.length;
            return(
            <div 
            key={index} 
            style={{
                transform: `rotate(${isMobile? (index*deg)-75-90 :(index*deg)-75}deg)`, 
            }} 
            className="absolute top-2 flex w-[430px] h-[430px] items-center justify-start z-30"
            >
            <div className="rounded-full overflow-hidden bg-tertiary flex h-9 w-9 items-center justify-center">
                <img 
                  src={icon}  
                  className="w-5 h-5" 
                  style={{
                    transform: `rotate(${isMobile? -((index*deg)-75-90) :-((index*deg)-75)}deg)`, 
                  }}   
                />

            </div>
            </div>    
            );
            })
        }
        </div>
    );
}