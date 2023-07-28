import Image from "next/image";
import { Container } from "../skeleton";
import happyClientImage from "@/assets/images/happy-client.png";

export const CreateBrand = () => {
  return (
    <div className="">
      <Container>
        <div className="flex flex-col md:flex-row gap-y-12 md:gap-y-0 justify-between">
          <div className="flex-[0.46]">
            <Image src={happyClientImage} alt="Happy Client" />
          </div>
          <div className="flex-[0.46]">
            <h2 className="text-4xl md:text-[4rem] font-raleway  font-semibold text-[#252525] md:leading-[5rem] mb-[1.688rem]">
              Refreshing Your Brand & Paving
            </h2>
            <div className="text-[#8A8A8A] flex gap-y-5 flex-col">
              <p>
                Create a brand that can withstand the test of time, adapting to
                changes in the market and maintaining relevance for years to
                come. Attract potential clients who seek a strategic and
                comprehensive approach to brand building
              </p>
              <p>
                Emphasizing the importance of investing in a strong brand
                foundation. Build a unique and tailored brand with Biller
                Business Solution.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
