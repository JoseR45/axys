import { Button } from "../../shared/button/button_component";
import { Text } from "../../shared/Text/text";
import { HR } from "../../shared/HR/hr";


export const Contact = () => {
    return (
        <div>
            <HR from="right" className="my-8" />
            <div className="ml-16 w-3/5 ">
                <Text className="mx-3 text-left my-10" family="compressed" size="28" color="white" value="GOT A PROBLEM <br /> TO SOLVE?" />
    
                <Text className="mx-3 w-3/5 my-10" family="compressed" color="secondary" textAlign="left" size="26px" />
            </div>
            <div className="">
                <Button>
                    <Text
                        value="Hit us up!"
                        color="secondary"
                        size="22px"
                        family="helvetica"
                        textAlign="center"
                    />
                </Button>
            </div>
            <HR className="my-8 bg-hr-linear-gradient" />
        </div>
    );
}
