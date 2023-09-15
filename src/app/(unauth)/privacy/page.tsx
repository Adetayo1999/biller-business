
import Privacy from "@/components/privacy";
import { Container } from "@/components/skeleton";

import TermsAndCondition from "@/components/terms";

const Terms = () => {

  return (
    <main className="flex flex-col gap-y-[4rem]">
      <Container>
        <div className="text-center md:w-[60%] mx-auto ">
          <h1 className=" text-5xl md:text-[5.5rem] font-raleway mb-3 text-[#252525] font-semibold">
            Privacy Policy
          </h1>
          {/* <p className="text-[#808080] text-lg md:text-xl font-light">
            Learn about Biller Business Solution and all our leading partners in
            Nigeria and the world as a whole
          </p> */}
        </div>
      </Container>
      <Privacy />
    </main>
  );
};

export default Terms;
