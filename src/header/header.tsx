import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEventHandler, useState } from "react";
import { Nav } from "./components/Nav/nav";
import { iHeaderProps } from "./header.d";

export const Header: React.FC<iHeaderProps> = ({}) => {
  const [showItems, setShowItems] = useState<boolean>(false);

  const handleClickShowItems: MouseEventHandler<HTMLDivElement> = () => {
    setShowItems(!showItems);
  };

  return (
    <>
      <div
        id="header-container"
        className={`w-full bg-primary fixed top-0 z-40`}
      >
        <header
          className={`w-full flex flex-col md:flex-row justify-between items-center py-4 px-10`}
        >
          <div
            className={
              "flex flex-row justify-between items-center max-md:w-full px-[20px]"
            }
          >
            <div id="logo-container">
              <p
                className={`text-[40px] font-[400] text-white text-center font-compressed`}
              >
                LOGO
              </p>
            </div>
            <div className={`visible md:hidden`} onClick={handleClickShowItems}>
              <FontAwesomeIcon
                icon={showItems ? faClose : faBars}
                color="#ffffff"
                size="lg"
              />
            </div>
          </div>
          <div
            className={`${
              showItems ? "h-auto" : "h-0"
            } overflow-hidden md:h-auto max-md:w-full`}
          >
            <Nav />
          </div>
        </header>
      </div>
    </>
  );
};
