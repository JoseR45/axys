import { Ticker } from "../../shared/Ticker/ticker"
import { Text } from "../../shared/Text/text"
import { HR } from "../../shared/HR/hr"
import { useEffect, useState } from "react"
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 1024);
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return(
        <section className="bg-primary w-full  min-h-[600px] min-w-[600px]  flex flex-col">
            <div className=" w-full h-8 flex items-center justify-center">
               <div className="md:w-3/12 w-5/12  h-full">
                    <Text 
                    value="Why choose us?"
                    color="white"
                    size="25px"
                    lineHeight="36px"
                    textAlign="center"
                    family="Helvetica"
                    />
                </div>
                <div className="md:w-9/12 w-7/12">
                    <HR from="right"/>
               </div>
            </div>
            <div className="w-full h-full flex items-center justify-center relative flex-col lg:flex-row">
                <div className="w-full h-full flex  items-center justify-center z-20">
                    <div className="w-[736px] ">
                        <Text 
                            value="Launching visions," 
                            size={isMobile?"60px":"100px" }
                            color="text-secundary" 
                            textAlign={isMobile?"center":"start" }
                            family="Helvetica Compressed"
                            lineHeight={isMobile?"60px":"100px" }
                            />
                        <Text 
                            value="building websites" 
                            size={isMobile?"60px":"100px" }
                            color="text-secundary" 
                            textAlign={isMobile?"center":"start" }
                            family="Helvetica Compressed"
                            lineHeight={isMobile?"60px":"100px" }
                            />
                            <br />
                        <Text 
                            value="We combine expert web development with a passion for design, creating seamless user experiences that drive results." 
                            size={isMobile?"27px":"32px" }
                            color="text-white" 
                            textAlign={isMobile?"center":"start" }
                            family="Helvetica"
                            lineHeight={isMobile?"30px":"36px" }/>
                    </div>
                </div>
                {isMobile&& <br /> }
                <div className="lg:max-w-[360px] lg:minw-w-[360px] lg:h-[450px] max-w-[450px] minw-w-[450px] h-[360px] min-h-[360px] z-0 overflow-hidden flex items-end justify-end relative">
                   <div className=" overflow-hidden w-full">
                   <Skills isMobile={isMobile}></Skills>
                    </div>               
                </div>
            </div>
            {isMobile&& <br /> }
            <div>
                <Ticker backgroundColor="transparent" from="right" speed={88}>
                {ticker_content.map((data) => {
                    return(<Text 
                        value={data} 
                        size={isMobile?"40px":"64px" }
                        color="text-secundary" 
                        textAlign="center" 
                        family="Helvetica Compressed"
                        lineHeight="50px"/>)
                })}
                </Ticker>
                <Ticker backgroundColor="transparent" from="left" speed={103}>
                {ticker_content.map((data) => {
                    return(<Text 
                        value={data} 
                        size={isMobile?"40px":"64px" } 
                        color="text-secundary" 
                        textAlign="center" 
                        family="Helvetica Compressed"
                        lineHeight="50px"/>)
                })}
                    
                </Ticker>
               
            </div>
        </section>
    )
}
