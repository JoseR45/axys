import { PropsWithChildren } from "react";

/**
 * Interface for Ticker component props.
 * Extends PropsWithChildren to include child elements.
 */
interface iTickerProps extends PropsWithChildren<{
    //Placeholder for future extension(If not intended to be extended you should use type instead of interface) 
    
    /**
     * Speed of the ticker in pixels per second.
     */
    speed: number;
    /** 
     * Direction from which the ticker starts: "left" or "right". 
     */
    from: "left" | "right";
}> {};

export default iTickerProps;
