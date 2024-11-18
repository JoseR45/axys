type TextAlign = "left" | "right" | "center" | "justify" | "start" | "end" | "inherit" | "initial" | "unset" ;

interface iTextProps {
    value: string;
    color: string;
    size: string;
    family?: string;
    weight?: string;
    lineHeight?: string;
    textAlign: TextAlign;

}

export default iTextProps;