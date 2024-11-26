import { Button } from "../../shared/button/button_component";
import { Text } from "../../shared/Text/text";
import { HR } from "../../shared/HR/hr";
import { Icon } from "../../shared/Icon/icon_component";


export const Contact = () => {

    const emailIcon = ["email", "src/assets/icons/email-icon.svg"];

    return (
        <section className="w-full flex flex-col">
            <div className="flex items-center justify-center py-16">
                <div className="md:w-9/12 w-7/12">
                    <HR from="left" />
                </div>
                <div className="md:w-3/12 w-5/12">
                    <Text
                        value="Contact"
                        color="white"
                        size="25px"
                        lineHeight="36px"
                        textAlign="center"
                        family="Helvetica"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-[15px] lg:px-8 ">
                <div className="flex flex-row justify-start px-10">
                    <div className="mx-3 md:w-8/12">
                        <Text className="mb-10 text-[40px] sm:text-[80px] lg:text-[100px] leading-[40px] sm:leading-[80px] lg:leading-[100px]" family="Helvetica Compressed" color="text-secundary" textAlign="left" value="GOT A PROBLEM TO SOLVE?" />
                        <Text className="w-7/12 text-[20px] sm:text-[25px] lg:text-[32px] leading-[20px] sm:leading-[25px] lg:leading-[32px]" family="Helvetica" color="white" textAlign="left" value="No matter how complex your project is, together we will find the web solution that will propel you to success." />
                        <span className="my-10 flex flex-row text-[20px] sm:text-[25px] lg:text-[32px] leading-[20px] sm:leading-[25px] lg:leading-[32px] gap-x-3">
                            <Icon iconName={emailIcon[0]} iconPath={emailIcon[1]}/>
                            <Text family="Helvetica" color="text-secundary" textAlign="left" value="axys@gmail.com"/>   
                        </span>
                    </div>
                </div>
                <div className={"flex flex-row justify-end px-16 py-10"}>
                    <Button>
                        <Text className="text-[20px] sm:text-[25px] lg:text-[32px] leading-[20px] sm:leading-[25px] lg:leading-[32px]"
                            value="Hit us up!"
                            color="white"
                            family="helvetica"
                            textAlign="center">
                        </Text>
                    </Button>
                </div>
            </div>
        </section>
    );
}
