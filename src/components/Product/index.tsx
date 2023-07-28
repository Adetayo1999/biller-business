import Image, { StaticImageData } from "next/image";
import { Container } from "../skeleton";

type ProductProps = {
  title: string;
  description: string;
  onClick?(): void;
  image: StaticImageData;
};

export const Product = ({
  title,
  description,
  onClick,
  image,
}: ProductProps) => {
  return (
    <div className="">
      <Container>
        <div className="flex flex-col md:flex-row gap-y-10 md:gap-y-0 justify-between ">
          <div className="flex-[0.45] flex flex-col gap-y-6">
            <h3 className="text-primary font-raleway font-semibold text-[2.5rem] md:text-[4rem] md:leading-[4.5rem]">
              {title}
            </h3>
            <p className="text-[#8A8A8A]">{description}</p>
            <button
              onClick={onClick}
              className="rounded-[0.75rem]  w-[17.5rem] font-bold bg-primarybg text-white outline-none px-4 h-[4rem]"
            >
              Get Started
            </button>
          </div>
          <div className="flex-[0.45]">
            <Image src={image} alt={title} />
          </div>
        </div>
      </Container>
    </div>
  );
};
