import { PropsWithChildren } from "react";

export interface iIconProps extends PropsWithChildren{
    iconName:string,
    iconPath: string,
    className?:string
}