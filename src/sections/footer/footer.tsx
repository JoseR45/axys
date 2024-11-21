import { HR } from "../../shared/HR/hr";
import { SocialMediaSet } from "../../shared/SocialMediaSet/social_media_set";
import { Text } from "../../shared/Text/text";
import { iFooterProps } from "./footer.d"

export const Footer: React.FC<iFooterProps> = () => {
    return (
        <div className="py-5 pb-40"
        >
            <HR from="center" />
            <div className="flex justify-center mt-10">
                <SocialMediaSet orientation="horizontal"></SocialMediaSet>
            </div>
            <div className="mt-5">
                <Text value="Axys Development Team" family="helvetica" size="18px" color="white" textAlign="center" />
                <div className="mb-2"></div>
                <Text value="axys© All CopyRights Reserved 2024" family="helvetica" size="16px" color="white" textAlign="center"  />
            </div>
        </div>
    )
}