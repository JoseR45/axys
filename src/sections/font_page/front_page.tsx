import React from "react";
import { SocialMediaSet } from "../../shared/SocialMediaSet/social_media_set";

export const FrontPage: React.FC<{}> = () => {
  return (
    <>
      <section className={`w-full h-screen flex flex-row justify-center`}>
        <div
          className={`w-[90%] h-[90%] flex flex-row justify-between items-center`}
        >
          <div className={"w-[15%] md:self-end"}>
            <SocialMediaSet orientation="vertical"></SocialMediaSet>
          </div>
          <div className={`flex flex-col w-[85%] gap-[20px]`}>
            <div
              className={
                "flex flex-col gap-[10px] leading-[50px] sm:leading-[60px] md:leading-[80px] lg:leading-[100px] "
              }
            >
              <div>
                <p
                  className={`text-[50px] sm:text-[70px] md:text-[90px] lg:text-[120px] font-[500] text-white text-left`}
                  style={{
                    fontFamily: "Helvetica Compressed, sans-serif",
                  }}
                >
                  WEB DESIGN{" "}
                </p>
                <p
                  className={`text-[50px] sm:text-[70px] md:text-[90px] lg:text-[120px] font-[500] text-white text-left`}
                  style={{
                    fontFamily: "Helvetica Compressed, sans-serif",
                  }}
                >
                  <span
                    className={`text-[30px] sm:text-[50px] md:text-[70px] lg:text-[90px] font-[500] text-secundary text-left`}
                    style={{
                      fontFamily: "Helvetica Compressed, sans-serif",
                    }}
                  >
                    AND
                  </span>{" "}
                  DEVELOPMENT
                </p>
              </div>
              <div
                className={
                  "w-[60px] sm:w-[90px] md:w-[120px] lg:w-[160px] border-[2px] sm:border-[3px] md:border-[4px] bg-white"
                }
              ></div>
            </div>
            <div className={"flex flex-col gap-[15px]"}>
              <div>
                <p
                  className={`text-[15px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-[400] text-left text-white leading-[22px] sm:leading-[25px] md:leading-[30px] lg:leading-[35px]`}
                  style={{
                    fontFamily: "Helvetica, sans-serif",
                  }}
                >
                  We are a Development agency with offices in Havana, Cuba. We
                  combine strategic intelligence with creative intuition and
                  technological efficiency to develop brands that are not only
                  visible, but tangible.
                </p>
              </div>
              <div className={"flex flex-row justify-end"}>
                <button
                  className={"px-4 py-2 rounded-[50px] border border-white"}
                >
                  <p
                    className={`text-[20px] font-[400] text-white text-left font-helvetica`}
                  >
                    Hit us up
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
