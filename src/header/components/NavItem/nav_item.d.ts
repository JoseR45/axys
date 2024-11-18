import { MouseEventHandler, PropsWithChildren } from "react";
export interface iNavItemProps extends PropsWithChildren<{}> {
    href: string;
    handleClickCurrentHref: MouseEventHandler;
}