import React, { PropsWithChildren } from "react";

interface iButtonProps extends PropsWithChildren {
    className?: string;  //Optional className prop
    children?: React.ReactNode //Applying type safety to this optional prop
}

export default iButtonProps