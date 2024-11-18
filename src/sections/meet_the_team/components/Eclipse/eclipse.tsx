import { Circle } from "../../../../shared/Circle/circle";





export const Eclipse = () => {
    return(
        <div className="relative">
            <div>
                <Circle radio={230} color="white"></Circle>
            </div>
            <div>
                <Circle radio={200} color="white"></Circle>
            </div>
            <div>
                <Circle radio={160} color="white"></Circle>
            </div>
        </div>
    );
}