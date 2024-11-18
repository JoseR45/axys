import { PropsWithChildren } from "react";

export interface iSocialMediaSet extends PropsWithChildren {
    orientation: "vertical" | "horizontal";
    backgroundColor?: string;
}