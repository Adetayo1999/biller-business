import { Container } from "@/components/skeleton";
import ideaImage from "@/assets/images/ideas-img.png";
import Image from "next/image";

export const FreshDiscussions = () => {
  return (
    <div className="">
      <Container>
        <div className="flex flex-col  md:flex-row  justify-between">
          <div className="flex-[0.75]">
            <h5 className="font-medium text-[#252525] text-2xl mb-[1.5rem]">
              Fresh Topic & Discussion Forum About Brands, Products, Services,
              and Experiences of Online or Offline in Business Solution
            </h5>
            <div className="text-[#8A8A8A] flex gap-y-7 flex-col">
              <p>
                Delve into the significance of positive customer experiences in
                influencing brand loyalty, customer retention, and word-of-mouth
                marketing. Businesses will compare and contrast the challenges
                and opportunities businesses face in delivering exceptional
                customer experiences in both digital and physical environments.
              </p>
              <p>
                Leveraging technology and data analytics to enhance customer
                experiences and personalize interactions will be a key point of
                focus, as well as the importance of gathering customer feedback
                to continually improve products and services.
              </p>
            </div>
          </div>
          <div className="flex-[0.2] hidden md:block">
            <Image src={ideaImage} alt="Idea" />
          </div>
        </div>
      </Container>
    </div>
  );
};
