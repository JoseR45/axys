import { PropsWithChildren } from "react";

interface iButtonProps extends PropsWithChildren {
    value:string;
    className?: string;  //Extended functionality by LeudiX
}

export default iButtonProps