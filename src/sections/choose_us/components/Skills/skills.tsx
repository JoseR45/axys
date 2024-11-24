import React from "react";
import { Circle } from "../../../../shared/Circle/circle";
import iSkillsProps from "./skills.d";
import postgres from "../../../../assets/icons/dbs-postgresql-svgrepo-com.svg";
import react from "../../../../assets/icons/react-svgrepo-com.svg";
import tailwind from "../../../../assets/icons/tailwind-css-svgrepo-com.svg";
import ts from "../../../../assets/icons/language-typescript-svgrepo-com.svg";
import python from "../../../../assets/icons/python-127-svgrepo-com.svg";
import django from "../../../../assets/icons/django-icon-svgrepo-com.svg";

const iconosList = [django, python, ts, tailwind, react, postgres];

export const Skills: React.FC<iSkillsProps> = ({}) => {
  return (
    <>
      <div className="flex lg:hidden  gap-2 sm:gap-5 flex-col items-center w-12 min-w-12">
      {iconosList.map((icon, index) => {
          
          return (
              <div key={index} className="rounded-full overflow-hidden  bg-tertiary flex w-5 h-5 sm:w-7 sm:h-7 items-center justify-center">
                <img
                  src={icon}
                  className="w-3 h-3 sm:w-5 sm:h-5 rounded-md"
                />
              </div>
          );
        })}
      </div>
      <div className="relative w-[350px] h-[350px] min-h-[350px] min-w-[350px] hidden lg:flex items-center justify-center">
        <Circle radio={150} color="white" border="border-dashed" to={"right"} />

        {iconosList.map((icon, index) => {
          let deg = 180 / iconosList.length;
          return (
            <div
              key={index}
              style={{
                transform: `rotate(${index * deg - 75}deg)`,
                width: `${"330px"}`,
                height: `${"330px"}`,
              }}
              className={`absolute ${"top-2"} flex  items-center justify-start z-30`}
            >
              <div className="rounded-full overflow-hidden bg-tertiary flex h-9 w-9 items-center justify-center">
                <img
                  src={icon}
                  className="w-5 h-5"
                  style={{
                    transform: `rotate(${-(index * deg - 75)}deg)`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
