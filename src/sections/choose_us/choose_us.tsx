import { Ticker } from "../../shared/Ticker/ticker"
import { Text } from "../../shared/Text/text"
import { HR } from "../../shared/HR/hr"
import { Skills } from "./components/Skills/skills.tsx"
const ticker_content = [
    "UX DESIGN .",
    "FRONTEND DEVELOPMENT .",
    "BACKEND DEVELOPMENT .",
    "UX DESIGN .",
    "FRONTEND DEVELOPMENT .",
    "BACKEND DEVELOPMENT ."
]

export const ChooseUs = () => {
   
    
    return(
        <section className="bg-primary  w-full  h-auto flex flex-col">
            <div className=" w-full h-8 flex items-center justify-center">
                <div className="md:w-4/12 lg:w-3/12 w-6/12 pl-2">
                    <Text
                        value="Why choose us"
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
                            value="We combine expert web development with a passion for design, creating seamless user experiences that drive results." 
                            color="text-white" 
                            textAlign="start" 
                            family="Helvetica"
                            className="paragraph"
                            />
                    </div>
                </div>
                
                <div className=" overflow-hidden flex items-end justify-end relative">
                   <div className=" overflow-hidden w-full h-full  lg:flex items-center">
                        <Skills ></Skills> 
                    </div>               
                </div>
            </div>

            <div className="pt-10">
                <Ticker backgroundColor="transparent" from="right" speed={88}>
                {ticker_content.map((data, idx) => {
                    return(<Text
                        key={idx} 
                        value={data} 
                        color="text-secundary" 
                        textAlign="center" 
                        family="Helvetica Compressed"
                        className="text-[40px] md:text-[60px] leading-[50px]"
                        />)
                })}
                </Ticker>
                <Ticker backgroundColor="transparent" from="left" speed={103}>
                {ticker_content.map((data, idx) => {
                    return(<Text 
                        key={idx}
                        value={data} 
                        color="text-secundary" 
                        textAlign="center" 
                        family="Helvetica Compressed"
                        className="text-[40px] md:text-[60px] leading-[50px]"
                        />)
                })}
                    
                </Ticker>
               
            </div>
        </section>
    )
}
