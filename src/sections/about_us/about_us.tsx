import { Text } from "../../shared/Text/text";
import { HR } from "../../shared/HR/hr";

export const AboutUs = () => {
    return(
        <section className="bg-primary  w-full  h-auto pb-8 sm:pb-14 flex flex-col">
            <div className=" w-full h-8 flex items-center justify-center">
                <div className="md:w-4/12 lg:w-3/12 w-5/12">
                    <Text
                        value="About us"
                        color="white"
                        lineHeight="36px"
                        textAlign="end"
                        family="Helvetica"
                        className="text-base sm:text-lg  md:text-2xl"
                    />
                </div>
                <div className="w-full">
                    <HR from="right"/>
               </div>
            </div>
            <div className="w-full h-full flex items-center justify-center relative flex-row-reverse  lg:flex-row pt-8">
                <div className="w-full h-full flex  items-center justify-start  p-3 lg:pl-8">
                    <div className="w-full ">
                        <Text 
                            value="Launching visions," 
                            color="text-secundary" 
                            textAlign="start"
                            family="Helvetica Compressed"
                            className="title"
                            />
                        <Text 
                            value="building websites" 
                            color="text-secundary" 
                            textAlign="start"
                            family="Helvetica Compressed"
                            className="title"
                            />
                            <br />
                        <Text 
                            value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur mollitia velit alias ex eligendi eos, vero facere. Delectus neque reprehenderit perspiciatis, modi totam aperiam, eaque tempore atque voluptatem debitis animi." 
                            color="text-white" 
                            textAlign="start" 
                            family="Helvetica"
                            className="paragraph"
                            />
                        <Text 
                            value="Let's create something amazing together!" 
                            color="text-white" 
                            textAlign="start" 
                            family="Helvetica"
                            lineHeight="100px"
                            className="text-[15px] sm:text-[25px] lg:text-[32px] leading-[20px] sm:leading-[25px] lg:leading-[32px] font-bold"
                            />
                    </div>
                </div>
            </div>
    </section>
    );
}
