import { Circle } from "../../../../shared/Circle/circle";





export const Eclipse = () => {
    return(
        <div className="relative w-full h-[470px] bg-primary flex items-center justify-center">
            <div className="relative w-[400px] flex items-center">
                <div className="absolute">
                    <Circle radio={200} color="white"/>
                </div>
                <div className="relative w-[300px] flex items-center">
                    <div className="absolute">
                    <Circle radio={150} color="black"/>
                    </div>
                    <div className="absolute flex justify-end w-full">
                        <Circle radio={100} color="white"/>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}