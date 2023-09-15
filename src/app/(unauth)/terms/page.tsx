
import { Container } from "@/components/skeleton";
import TermsAndCondition from "@/components/terms";

const Terms = () => {
  

  return (
    <main className="flex flex-col gap-y-[4rem]">
      <Container>
        <div className="text-center md:w-[60%] mx-auto ">
          <h1 className=" text-5xl md:text-[5.5rem] font-raleway mb-3 text-[#252525] font-semibold">
            Terms and Conditions
          </h1>
         
        </div>
      </Container>
      <TermsAndCondition />
    </main>
  );
};

export default Terms;
