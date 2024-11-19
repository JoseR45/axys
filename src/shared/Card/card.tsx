import { CardInfo } from "./card.d";

export const Card: React.FC<CardInfo> = ({
  name,
  profilePicturePatch,
  description,
}) => {
  const { firstName, secondName } = name;

  return (
    <>
      <div className={`flex flex-row items-center justify-center p-1 gap-2`}>
        <div
          className={`rounded-[50%] w-[80px] h-[80px] border flex flex-row items-center justify-center`}
        >
          <img src={profilePicturePatch} className={`bg-center bg-cover`} />
        </div>
        <div>
          <p
            className={`text-[15px] leading-[20px] font-compressed text-white`}
          >
            {`${firstName} ${secondName}`}
          </p>
          <p className={`text-[15px] leading-[20px] font-helvetica text-white`}>
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
