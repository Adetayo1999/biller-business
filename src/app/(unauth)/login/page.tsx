import { FreshDiscussions } from "@/components/common/fresh-discussions";
import { CreateBrand } from "@/components/create-brand";
import { CustomButton } from "@/components/forms/button";
import { CustomInput } from "@/components/forms/input";
import { Container } from "@/components/skeleton";
import Link from "next/link";

const Login = () => {
  return (
    <main className="flex flex-col gap-y-[7rem]">
      <Container>
        <div className="flex justify-center items-center flex-col ">
          <div className="mb-[2rem] md:mb-[3rem]">
            <h2 className="font-raleway text-[2.5rem] md:text-[4rem] font-semibold text-[#252525]">
              Welcome Back 👋
            </h2>
          </div>
          <form className="flex flex-col gap-y-6 w-full md:w-[60%] mx-auto">
            <CustomInput labelText="Email" name="email" />
            <CustomInput labelText="Password" name="password" type="password" />
            <div className="flex justify-center mt-8">
              <CustomButton title="Login" />
            </div>
            <div className="text-center">
              <p>
                Not Registered?{" "}
                <Link href="/signup" className="underline">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </Container>
      <CreateBrand />
      <FreshDiscussions />
    </main>
  );
};

export default Login;
