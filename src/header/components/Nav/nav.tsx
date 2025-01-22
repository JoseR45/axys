import React, { MouseEventHandler, useState } from "react";
import { NavItem } from "../NavItem/nav_item";
import { iNavProps } from "./nav.d";
import navData from "./nav.data";

export const Nav: React.FC<iNavProps> = () => {
  const [items, setItems] = useState(navData);

  const handleClickCurrentNavItem: MouseEventHandler<HTMLAnchorElement> = (
    e
  ) => {
    const hTMLAnchorElement = e.currentTarget as HTMLAnchorElement;

    const updatedItems = items.map((i) => {
      if (hTMLAnchorElement.href.includes(i.href)) {
        i.active = true;
      } else {
        i.active = false;
      }
      return i;
    });

    setItems(updatedItems);
  };

  return (
    <>
      <div>
        <nav className={"flex flex-col"}>
          <div
            className={`flex flex-col md:flex-row justify-center items-center`}
          >
            {items.map((i) => (
              <NavItem
                key={i.href}
                href={i.href}
                active={i.active}
                handleClickCurrentNavItem={handleClickCurrentNavItem}
              >
                <p className={`text-[24px] text-white font-helvetica`}>
                  {i.text.toUpperCase()}
                </p>
              </NavItem>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};
