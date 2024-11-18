type Side = 'right'| 'left' | 'bottom' | 'top' | 'top right' | 'top left' | 'bottom right' | 'bottom left'; 

interface iCircleProps {
    radio: number;
    color?: 'white' | 'black' ;
    border?: 'border-dashed'; 
    to?: Side;
}

export default iCircleProps;