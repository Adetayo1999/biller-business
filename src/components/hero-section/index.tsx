import { Container } from "../skeleton";
import { FaArrowRightLong } from "react-icons/fa6";
import bannerImage from "@/assets/images/banner-image.png";
import Image from "next/image";
import Link from "next/link";
import billerpayIcon from "@/assets/images/billerpay_icon.png";
import billervestIcon from "@/assets/images/billervest_icon.png";

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
                <div className="w-[2.5rem] p-2 h-[2.5rem] bg-primary rounded flex justify-center items-center">
                  <Image src={billervestIcon} alt="Billervest" />
                </div>
                <p className="font-medium text-xl text-[#252525] w-[6.5rem]">
                  BillerVest
                </p>
              </div>
              <div className="border-primary pl-[2.875rem] md:border-l-2">
                <Link
                  href="https://billervest.vercel.app/ "
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-x-3 text-primary font-semibold"
                >
                  <span className="underline">Get Started</span>
                  <span>
                    <FaArrowRightLong className="text-lg" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex items-center ">
              <div className="flex gap-x-[2.188rem] items-center pr-[2.875rem]   ">
                <div className="w-[2.5rem] h-[2.5rem] p-2 bg-primary rounded flex justify-center items-center">
                  <Image src={billerpayIcon} alt="Billerpay" />
                </div>
                <p className="font-medium text-xl text-[#252525] w-[6.5rem]">
                  BillerPay
                </p>
              </div>
              <div className="border-primary pl-[2.875rem] md:border-l-2">
                <Link
                  className="flex items-center gap-x-3 text-primary font-semibold"
                  href="https://billerpay.vercel.app/"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="underline">Get Started</span>
                  <span>
                    <FaArrowRightLong className="text-lg" />
                  </span>
                </Link>
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
