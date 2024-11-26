import { Button } from "../../shared/button/button_component";
import { Text } from "../../shared/Text/text";
import { HR } from "../../shared/HR/hr";
import { Icon } from "../../shared/Icon/icon_component";


export const Contact = () => {

    const emailIcon = ["email", "src/assets/icons/email-icon.svg"];

    return (
        <section className="w-full min-w-[375px] flex flex-col">
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
            <div className="h-full flex flex-col gap-[15px] ">
                <div className="flex flex-row justify-start px-20">
                    <div className="mx-3 my-10 w-3/5">
                        <Text className="my-10" family="Helvetica Compressed" size="100px" lineHeight="100px" color="text-secundary" textAlign="left" value="GOT A PROBLEM TO SOLVE?" />
                        <Text className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl" family="Helvetica" size="32px" color="white" lineHeight="36px" textAlign="left" value="No matter how complex your project is, together we will find the web solution that will propel you to success." />
                        <span className="my-10 flex flex-row gap-x-3">
                            <Icon iconName={emailIcon[0]} iconPath={emailIcon[1]}/>
                            <Text family="Helvetica" size="32px" color="text-secundary" textAlign="left" value="axys@gmail.com"/>   
                        </span>
                    </div>
                </div>
                <div className={"flex flex-row justify-end px-20 py-16"}>
                    <Button>
                        <Text
                            value="Hit us up!"
                            color="white"
                            size="22px"
                            family="helvetica"
                            textAlign="center">
                        </Text>
                    </Button>
                </div>
            </div>
        </section>
    );
}
