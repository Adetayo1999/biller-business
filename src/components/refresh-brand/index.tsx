import { Container } from "../skeleton";
import { BiCheck } from "react-icons/bi";
import giftcardImage from "@/assets/images/giftcard-img.png";
import btcImage from "@/assets/images/btc-image.png";
import Image from "next/image";

export const RefreshBrand = () => {
  return (
    <Container>
      <div className="">
        <div className="flex justify-between mb-[4.375rem]">
          <div className="md:flex-[0.7] flex flex-col justify-between">
            <div className="mb-[2rem] md:mb-[3.25rem]">
              <h2 className="text-4xl md:text-[4rem]  font-semibold text-[#252525] md:leading-[5rem] font-raleway">
                Refreshing Your Brand & Paving Way for Ventures
              </h2>
            </div>
            <div className="flex justify-between">
              <div className="flex-[0.25] hidden md:block ">
                <Image src={giftcardImage} alt="Giftcard" />
              </div>
              <div className="md:flex-[0.7]">
                <div className="mb-[3rem]">
                  <p className="text-[#8A8A8A]">
                    Creating favorable conditions or opportunities that enable
                    the establishment and growth of new business endeavors. It
                    involves removing obstacles, providing necessary resources,{" "}
                  </p>
                </div>
                <div className="">
                  <ul className="flex flex-col gap-y-[0.5rem] ">
                    <li className="flex gap-x-3 items-center text-[#8A8A8A]">
                      <span>
                        <BiCheck className="text-xl" />
                      </span>
                      <span>
                        Creating a conducive environment for entrepreneurs
                      </span>
                    </li>
                    <li className="flex gap-x-3 items-center text-[#8A8A8A]">
                      <span>
                        <BiCheck />
                      </span>
                      <span>
                        Start, operate, and expand their ventures successfully.
                      </span>
                    </li>
                    <li className="flex gap-x-3 items-center text-[#8A8A8A]">
                      <span>
                        <BiCheck />
                      </span>
                      <span>
                        Implementing business-friendly policies and regulations
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[0.25] hidden md:block">
            <Image src={btcImage} alt="BTC" height={360} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-10 md:gap-y-0 justify-between gap-x-[4.375rem]">
          <div className="">
            <h5 className="text-[#252525] font-medium text-xl mb-2">
              Innovative Strategies
            </h5>
            <p className="text-[#8A8A8A]">
              Embrace sustainable practices in your business to appeal products
              and services.
            </p>
          </div>
          <div className="">
            <h5 className="text-[#252525] font-medium text-xl mb-2">
              Thrives to Contribute
            </h5>
            <p className="text-[#8A8A8A]">
              Expand your product or service portfolio to cater to a broader
              range of customers.
            </p>
          </div>
          <div className="">
            <h5 className="text-[#252525] font-medium text-xl mb-2">
              Redefining Goals Faster
            </h5>
            <p className="text-[#8A8A8A]">
              Reassess and update the objectives of a business to changing
              circumstances or new information.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
