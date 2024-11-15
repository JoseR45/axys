import { PropsWithChildren } from "react";

/**
 * Interface for Ticker component props.
 * Extends PropsWithChildren to include child elements.
 */
interface iTickerProps extends PropsWithChildren<{
    /**
     * Speed of the ticker in pixels per second.
     */
    speed: number;
    /** 
     * Direction from which the ticker starts: "left" or "right". 
     */
    from: "left" | "right";
}> { };

export default iTickerProps;
