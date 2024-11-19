import React from "react";
import { HR } from "../../../shared/HR/hr";
import { Text } from "../../../shared/Text/text";
import { useMarker } from "../../hooks/use_marker";
import { NavItem } from "../NavItem/nav_item";
import { iNavProps } from "./nav.d";

export const Nav: React.FC<iNavProps> = ({ showMarker = false }) => {
  const { navItemContainerRef, markerStyle, handleClickCurrentHref } =
    useMarker();

  return (
    <>
      <div>
        <nav className={"flex flex-col"}>
          <div
            className={`flex flex-col md:flex-row justify-center items-center`}
            ref={navItemContainerRef}
          >
            <NavItem
              href={"#about-section"}
              handleClickCurrentHref={handleClickCurrentHref}
            >
              <Text
                value="ABOUT"
                size="24px"
                color="white"
                family="Helvetica"
                weight="400"
                lineHeight="28px"
                textAlign="left"
              />
            </NavItem>
            <NavItem
              href={"#services-section"}
              handleClickCurrentHref={handleClickCurrentHref}
            >
              <Text
                value="SERVICES"
                size="24px"
                color="white"
                family="Helvetica"
                weight="400"
                lineHeight="28px"
                textAlign="left"
              />
            </NavItem>
            <NavItem
              href={"#contact-section"}
              handleClickCurrentHref={handleClickCurrentHref}
            >
              <Text
                value="CONTACT"
                size="24px"
                color="white"
                family="Helvetica"
                weight="400"
                lineHeight="28px"
                textAlign="left"
              />
            </NavItem>
          </div>
          <div
            className={`${showMarker ? "flex" : "hidden"} relative w-[${
              navItemContainerRef.current?.offsetWidth
            }]`}
          >
            <div
              id="nav-item-marker"
              style={{
                width: `${markerStyle.width}px`,
                transform: `translateX(${markerStyle.left}px)`,
              }}
            >
              <HR from="center" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
