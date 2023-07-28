import Image from "next/image";
import { Container } from "../skeleton";
import dollarImage from "@/assets/images/dollar-img.png";
import investmentImage from "@/assets/images/investment-img.png";
import { Rating } from "../common/rating";

export const Investment = () => {
  return (
    <div className="bg-[#FAFAFA] py-[5.6rem]">
      <Container>
        <div className="mb-[4.75rem]">
          <div className="flex justify-between mb-[2.813rem]">
            <div className="flex-[0.2] hidden md:flex flex-col gap-y-[2rem]">
              <div className="">
                <Image src={dollarImage} alt="Dollar Image" />
              </div>
              <div className="">
                <h5 className="text-[#252525] text-xl font-medium mb-2">
                  Passive Investment
                </h5>
                <p className="text-[#8A8A8A]">
                  Invest with us and gain valuable interest on the long run.
                </p>
              </div>
            </div>
            <div className="md:flex-[0.75]">
              <Image src={investmentImage} alt="Investment" height={350} />
            </div>
          </div>
          <div className="">
            <h2 className="text-4xl md:text-[4rem] font-raleway  font-semibold text-[#252525] md:leading-[5rem] mb-4">
              Let Us Help You to Create a New, Longlasting Brand Only Just for
              You
            </h2>
            <p className="text-[#8A8A8A]">
              Create a brand that can withstand the test of time, adapting to
              changes in the market and maintaining relevance for years to come.
              Attract potential clients who seek a strategic and comprehensive
              approach to brand building, emphasizing the importance of
              investing in a strong brand foundation. Build a unique and
              tailored brand with Biller Business Solution.
            </p>
          </div>
        </div>
        <Rating />
      </Container>
    </div>
  );
};
