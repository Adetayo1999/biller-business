import { Container } from "@/components/skeleton";
import Image from "next/image";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import billerpayLogo from "@/assets/images/billerpay-logo.png";
import billervestLogo from "@/assets/images/billervest-logo.png";
import Link from "next/link";

export const Partners = () => {
  return (
    <div id="partners">
      <Container>
        <div
          className="bg-primarybg rounded-[0.438rem] md:h-[18.75rem] md:px-[4.375rem] px-[2rem] py-[3.625rem]  flex justify-between text-white
      flex-col md:flex-row gap-y-12 md:gap-y-0
      "
        >
          <div className="flex-[0.45] ">
            <h2 className="text-4xl md:text-[3rem] mb-3 leading-[3.2rem] font-raleway font-semibold">
              Our Lovely Partner in Nigeria
            </h2>
            <p className="text-[#F2F2F2]">
              Introducing Billerpay and Billervest, our partners in Nigeria,
              where you can easily pay bills and create wallets.
            </p>
          </div>
          <div className="flex-[0.45] flex items-center justify-between gap-x-[2.188rem]">
            <button className="">
              <MdOutlineArrowBackIos className="text-2xl" />
            </button>
            <div className="flex gap-x-12 items-center">
              <Link
                href="https://billerpay.vercel.app/"
                target="_blank"
                rel="noopener"
              >
                <Image src={billerpayLogo} width={130} alt="Billerpay" />
              </Link>
              <Link
                href="https://billervest.vercel.app/ "
                target="_blank"
                rel="noopener"
              >
                <Image src={billervestLogo} width={130} alt="Billervest" />
              </Link>
            </div>
            <button className="">
              <MdOutlineArrowForwardIos className="text-2xl" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
