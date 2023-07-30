"use client";
import { Product } from "@/components/Product";
import { Partners } from "@/components/common/partners";
import { Rating } from "@/components/common/rating";
import { RefreshBrand } from "@/components/refresh-brand";
import { Container } from "@/components/skeleton";
import moneyLogo from "@/assets/images/money-img.png";
import billerBTCImage from "@/assets/images/billerbtc-img.png";
import aboutImage from "@/assets/images/about-img.png";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  return (
    <main className="flex flex-col gap-y-[7rem]">
      <Container>
        <div className="text-center md:w-[60%] mx-auto ">
          <h1 className=" text-5xl md:text-[5.5rem] font-raleway mb-3 text-[#252525] font-semibold">
            About Us
          </h1>
          <p className="text-[#808080] text-lg md:text-xl font-light">
            Learn about Biller Business Solution and all our leading partners in
            Nigeria and the world as a whole
          </p>
        </div>
      </Container>
      <Product
        description="Unlock your business's true potential with our innovative solutions, tailored to meet your unique needs. Experience efficiency. growth, and success like never before, all with our powerful business solution services.
        Reassess and update the objectives of a business to changing circumstances or new information.
        "
        title="Biller Business Solution"
        image={aboutImage}
      />
      <Partners />
      <Product
        description="An all-in-one mobile app designed to simplify and streamline bill payments across various sectors. Billerpay is a versatile platform that allows users to conveniently and securely handle a wide range of transactions. including mobile top-ups, flight bookings, e-commerce purchases, and gaming credits."
        title="Billerpay"
        image={moneyLogo}
        onClick={() => router.push("https://billerpay.store")}
      />
      <Product
        description="A crypto wallet in which you can store all your cryptos and NFTs, pay, exchange and stake crypto in a secured mobile & desktop app, protect your digital assets with industry-leading security."
        image={billerBTCImage}
        title="BillerVest"
        onClick={() => router.push("https://billervest.co")}
      />
      <Container>
        <Rating />
      </Container>
      <RefreshBrand />
    </main>
  );
};

export default About;
