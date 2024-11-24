import { Circle } from "../../../../shared/Circle/circle";
import { Line } from "../../../../shared/Line/line";
import { Text } from "../../../../shared/Text/text";

export const Eclipse = () => {
  return (
    <div className="relative w-full h-[470px] bg-primary flex items-center justify-center">
      <div className="relative w-[300px] flex items-center">
        <div className="absolute">
          <Circle radio={150} color="white" />
        </div>
        <div className="relative w-[250px] flex items-center">
          <div className="absolute">
            <Circle radio={125} color="black" />
          </div>
          <div className="absolute flex justify-end w-full">
            <Circle radio={90} color="white" />
          </div>
        </div>

        <div className={`absolute top-[-240px] w-10 left-4 flex flex-col items-center`}>
          <Text
            color="white"
            family="Helvetica"
            value="Dev"
            textAlign="center"
          />
          <Line length={150} />
        </div>
        <div
          className={`absolute top-[-240px] right-1 w-[100px] flex flex-col items-center`}
        >
          <Text
            color="white"
            family="Helvetica"
            value="Workflow"
            textAlign="center"
          />
          <Line length={150} />
        </div>
        <div
          className={`absolute top-[-240px] left-28 w-[64px] flex flex-col items-center`}
        >
          <Text
            color="white"
            family="Helvetica"
            value="Design"
            textAlign="center"
          />
          <Line length={150} />
        </div>
      </div>
    </div>
  );
};
