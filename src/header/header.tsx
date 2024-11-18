import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEventHandler, useState } from "react";
import { Text } from "../shared/Text/text";
import { Nav } from "./components/Nav/nav";
import { iHeaderProps } from "./header.d";

export const Header: React.FC<iHeaderProps> = ({
  backgroundColor = "transparent",
}) => {
  const [showItems, setShowItems] = useState<boolean>(false);

  const handleClickShowItems: MouseEventHandler<HTMLDivElement> = () => {
    setShowItems(!showItems);
  };

  return (
    <>
      <div id="header-container" className={`w-full bg-[${backgroundColor}]`}>
        <header
          className={`w-full flex flex-col md:flex-row justify-between items-center`}
        >
          <div
            className={
              "flex flex-row justify-between items-center max-md:w-full px-[20px]"
            }
          >
            <div id="logo-container">
              <Text
                value="LOGO"
                size="40px"
                color="white"
                family="Inter"
                weight="400"
                lineHeight="48px"
                textAlign="left"
              />
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
