import React from "react";
import { Text } from "../shared/Text/text";
import { Nav } from "./components/Nav/nav";

export const Header: React.FC<{}> = ({}) => {
  return (
    <>
      <div id="header-container" className={"w-[1200px]"}>
        <header className="bg-transparent w-full flex flex-row justify-between items-center">
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
          <Nav />
        </header>
      </div>
    </>
  );
};
