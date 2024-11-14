import { MouseEventHandler, PropsWithChildren } from "react";

interface iNavItemAttrs {
    href: string;
}

interface iNavItemProps extends PropsWithChildren<iNavItemAttrs> {
    handleCurrentHref: MouseEventHandler;
}

export default iNavItemProps;