import { Card } from "../../shared/Card/card";
import { cardInfos } from "./data/members.data";
import { HR } from "../../shared/HR/hr";
import { Text } from "../../shared/Text/text";
import { Eclipse } from "./components/Eclipse/eclipse";

export const MeetTheTeam = () => {
  return (
    <section
      id="about-section"
      className={`bg-primary w-full  flex flex-col h-auto`}
    >
      <div className={`w-full h-8 flex items-center justify-center`}>
        <div className="w-full">
          <HR from="left" />
        </div>
        <div className="md:w-4/12 lg:w-3/12 w-5/12">
          <Text
            value="Meet the team"
            color="white"
            lineHeight="36px"
            textAlign="start"
            family="Helvetica"
            className="text-base sm:text-lg  md:text-2xl"
          />
        </div>
      </div>
      <div
        className={`bg-primary h-auto w-full flex flex-col items-center lg:flex-row pt-9 pb-10`}
      >
        <div className={`hidden lg:flex lg:h-auto w-[100%] lg:w-[40%]`}>
          <Eclipse />
        </div>
        <div className={`h-auto w-[100%] lg:w-[60%] overflow-y-auto`}>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-2`}
          >
            {cardInfos.map((i) => {
              return <Card key={i.id} {...i} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
