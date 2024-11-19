import { Eclipse } from "./components/Eclipse/eclipse";
import { Text } from "../../shared/Text/text";
import { HR } from "../../shared/HR/hr";
import { Line } from "../../shared/Line/line";




export const MeetTheTeam = () => {
    return(
        <section className="bg-primary w-full min-h-[600px] min-w-[600px]  flex flex-col">
            <div className=" w-full h-8 flex items-center justify-center">
                <div className="md:w-9/12 w-7/12">
                    <HR from="left"/>
               </div>
               <div className="md:w-3/12 w-5/12  h-full">
                    <Text 
                    value="Meet the team"
                    color="white"
                    size="25px"
                    lineHeight="36px"
                    textAlign="center"
                    family="Helvetica"
                    />
                </div>
                
            </div>
            <div className="flex items-center">
            <Eclipse />
            <div className="w-full">
                <Line orientation="Horizontal" length={23}></Line>
            </div>
            </div>
        </section>
    );
}