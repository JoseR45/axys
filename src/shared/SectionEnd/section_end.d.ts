import { PropsWithChildren } from "react";

interface iSectionEndProps extends PropsWithChildren<{ from: "left" | "right" }> {
    //Placeholder for future extension(If not intended to be extended you should use type instead of interface) 
}

export default iSectionEndProps;