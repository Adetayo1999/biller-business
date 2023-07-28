import { Container } from "../skeleton";
import { FaArrowRightLong } from "react-icons/fa6";
import bannerImage from "@/assets/images/banner-image.png";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-y-10 md:gap-y-0 justify-between">
        <div className="md:flex-[0.5] flex flex-col gap-y-[2rem]">
          <div className="">
            <h1 className="text-5xl md:text-[4.5rem] font-raleway md:leading-[5rem] leading-[3.5rem] ">
              Tailored <b className="text-primary">Business</b> Solutions for
              You
            </h1>
          </div>
          <div className="">
            <p className="text-[#8A8A8A]">
              Unlock your business&apos;s true potential with our innovative
              solutions, tailored to meet your unique needs. Experience
              efficiency. growth, and success like never before, all with our
              powerful business solution services.
            </p>
          </div>
          <div className="flex flex-col gap-y-[1.8rem]">
            <div className="flex items-center ">
              <div className="flex gap-x-[2.188rem] items-center pr-[2.875rem]   ">
                <div className="w-[2.5rem] h-[2.5rem] bg-primary rounded flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M11 -0.000183105V3.03741C14.39 3.52864 17 6.43591 17 9.97475C17 10.877 16.82 11.7291 16.52 12.5211L19.12 14.055C19.68 12.8118 20 11.4284 20 9.97475C20 4.78177 16.05 0.50107 11 -0.000183105ZM10 16.9923C6.13 16.9923 3 13.8545 3 9.97475C3 6.43591 5.61 3.52864 9 3.03741V-0.000183105C3.94 0.50107 0 4.77175 0 9.97475C0 15.5086 4.47 19.9998 9.99 19.9998C13.3 19.9998 16.23 18.3858 18.05 15.8996L15.45 14.3657C14.7976 15.1868 13.9686 15.8496 13.0249 16.3044C12.0812 16.7592 11.0471 16.9944 10 16.9923Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="font-medium text-xl text-[#252525]">BillerVest</p>
              </div>
              <div className="border-primary pl-[2.875rem] md:border-l-2">
                <button className="flex items-center gap-x-3 text-primary font-semibold">
                  <span className="underline">Get Started</span>
                  <span>
                    <FaArrowRightLong className="text-lg" />
                  </span>
                </button>
              </div>
            </div>
            <div className="flex items-center ">
              <div className="flex gap-x-[2.188rem] items-center pr-[2.875rem]   ">
                <div className="w-[2.5rem] h-[2.5rem] bg-primary rounded flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M8.29268 2.43884C8.48674 2.43884 8.67286 2.51593 8.81008 2.65315C8.9473 2.79037 9.02439 2.97649 9.02439 3.17055V10.9754H16.8293C17.0061 10.9754 17.1769 11.0395 17.3102 11.1557C17.4434 11.2719 17.5301 11.4324 17.5541 11.6076L17.561 11.7071C17.561 16.5559 13.6293 19.9998 8.78049 19.9998C6.45176 19.9998 4.21841 19.0747 2.57175 17.4281C0.925084 15.7814 0 13.5481 0 11.2193C0 6.37055 3.4439 2.43884 8.29268 2.43884ZM11.2195 -0.000183105C13.5482 -0.000183105 15.7816 0.924901 17.4283 2.57156C19.0749 4.21822 20 6.45157 20 8.7803C20 8.97437 19.9229 9.16048 19.7857 9.2977C19.6485 9.43492 19.4624 9.51201 19.2683 9.51201H11.2195C11.0255 9.51201 10.8393 9.43492 10.7021 9.2977C10.5649 9.16048 10.4878 8.97437 10.4878 8.7803V0.731524C10.4878 0.537463 10.5649 0.351351 10.7021 0.214129C10.8393 0.0769073 11.0255 -0.000183105 11.2195 -0.000183105Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="font-medium text-xl text-[#252525]">BillerPay</p>
              </div>
              <div className="border-primary pl-[2.875rem] md:border-l-2">
                <button className="flex items-center gap-x-3 text-primary font-semibold">
                  <span className="underline">Get Started</span>
                  <span>
                    <FaArrowRightLong className="text-lg" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center text-white">
            <div className="flex-[0.65]">
              <input
                type="text"
                placeholder="E-mail Address"
                className="w-full h-[3.5rem] outline-none rounded-[0.438rem]  border-2 border-[#E8E8E8] px-4 text-black"
              />
            </div>
            <div className="flex-[0.3]">
              <button className="w-full h-[3.5rem] outline-none rounded-[0.438rem] bg-btnbg font-raleway font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex-[0.45]">
          <Image src={bannerImage} alt="banner" />
        </div>
      </div>
    </Container>
  );
};
