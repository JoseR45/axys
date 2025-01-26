import React, { MouseEventHandler, useState } from "react";
import { useIcons } from "../hooks/useIcons/use_icons";
import { Nav } from "./components/Nav/nav";
import { iHeaderProps } from "./header.d";

export const Header: React.FC<iHeaderProps> = ({}) => {
  const [toggleItems, setToggleItems] = useState<boolean>(false);

  const handleClickToggleItems: MouseEventHandler<HTMLDivElement> = () => {
    setToggleItems(!toggleItems);
  };

  const { pickOne } = useIcons();

  const bars_w = pickOne("bars_w");

  const cross_w = pickOne("cross_w");

  return (
    <>
      <div
        id="header-container"
        className={`w-full bg-primary fixed top-0 z-40`}
      >
        <header
          className={`w-full flex flex-col md:flex-row justify-between items-center py-2 px-2 sm:px-4 md:px-8 lg:px-16`}
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
            <div
              className={`cursor-pointer md:hidden`}
              onClick={handleClickToggleItems}
            >
              <img
                src={toggleItems ? cross_w?.path : bars_w?.path}
                className={`w-6 h-6`}
              />
            </div>
          </div>
          <div
            className={`${
              toggleItems ? "h-auto" : "h-0"
            } overflow-hidden md:h-auto max-md:w-full`}
          >
            <Nav />
          </div>
        </header>
      </div>
    </>
  );
};
