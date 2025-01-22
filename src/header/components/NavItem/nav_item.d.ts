import { MouseEventHandler, PropsWithChildren } from "react";

export type NavItemProps = PropsWithChildren<{
    href: string;
    active: boolean;
    //handleClickCurrentHref: MouseEventHandler;
    handleClickCurrentNavItem: MouseEventHandler;
}>; 