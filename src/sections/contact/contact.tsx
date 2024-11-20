import { Button } from "../../shared/button/button_component";
import { Text } from "../../shared/Text/text";
import { HR } from "../../shared/HR/hr";


export const Contact = () => {
    return (
        <div>
            <HR from="right" className="my-8" />
            <div className="ml-16 w-3/5 ">
                <h1 className="mx-3 text-left my-10">GOT A PROBLEM <br /> TO SOLVE?</h1>
                <Text className="mx-3 w-3/5 my-10" value="No matter how complex your project is, together we will find the web solution that will propel you to success." color="#808080D4" textAlign="left" size="26px" />
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
