import React from "react";
import { HR } from "../../../shared/HR/hr";
import { Text } from "../../../shared/Text/text";
import { useMarker } from "../../hooks/use_marker";
import { NavItem } from "../NavItem/nav_item";
import "./nav.css";
import iNavProps from "./nav.d";

export const Nav: React.FC<iNavProps> = ({}) => {
  const { navItemContainerRef, markerStyle, handleCurrentHref } = useMarker();

  return (
    <>
      <div id="nav-container">
        <nav id="nav" className={"flex flex-col"}>
          <div id="nav-item-container" ref={navItemContainerRef}>
            <NavItem
              href={"#about-section"}
              handleCurrentHref={handleCurrentHref}
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
              handleCurrentHref={handleCurrentHref}
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
              handleCurrentHref={handleCurrentHref}
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
            id="nav-item-marker-container"
            style={{
              width: `${navItemContainerRef.current?.offsetWidth}`,
            }}
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
