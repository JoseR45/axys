import { Card } from "../../shared/Card/card";
import { CardInfo } from "../../shared/Card/card.d";
import { HR } from "../../shared/HR/hr";
import { Text } from "../../shared/Text/text";
import { Eclipse } from "./components/Eclipse/eclipse";

const cardInfos: CardInfo[] = [
  {
    id: "1",
    name: {
      firstName: "Daniel Jesus",
      secondName: "Penalver Quintana",
    },
    profilePicturePatch: "",
    description: "lenckwncneswvoeswncnlew",
  },
  {
    id: "2",
    name: {
      firstName: "Yenni Maura",
      secondName: "Jerez Batista",
    },
    profilePicturePatch: "",
    description: "lenckwncneswvoeswncnlew",
  },
  {
    id: "3",
    name: {
      firstName: "Jose Carlos",
      secondName: "Milanes Anaya",
    },
    profilePicturePatch: "",
    description: "lenckwncneswvoeswncnlew",
  },
  {
    id: "4",
    name: {
      firstName: "Leudis Rafael",
      secondName: "Estrada Gonzalez",
    },
    profilePicturePatch: "",
    description: "lenckwncneswvoeswncnlew",
  },
  {
    id: "5",
    name: {
      firstName: "Jose Ramon",
      secondName: "Fidalgo Garcia",
    },
    profilePicturePatch: "",
    description: "lenckwncneswvoeswncnlew",
  },
];

export const MeetTheTeam = () => {
  return (
    <section className={`bg-primary w-full min-w-[600px] flex flex-col h-auto`}>
      <div className={`w-full h-8 flex items-center justify-center`}>
        <div className="md:w-9/12 w-7/12">
          <HR from="left" />
        </div>
        <div className="md:w-3/12 w-5/12">
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
      <div
        className={`bg-primary h-auto w-screen flex flex-col items-center lg:flex-row`}
      >
        <div className={`hidden lg:flex lg:h-auto w-[100%] lg:w-[40%]`}>
          <Eclipse />
        </div>
        <div className={`h-auto w-[100%] lg:w-[60%] overflow-y-scroll`}>
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
