import { Container } from "@/components/skeleton";
import { socialLinks } from "@/constants";
import Link from "next/link";

export const NewsLetterForm = () => {
  return (
    <div className="my-[6rem]">
      <Container>
        <div
          className="bg-primarybg rounded-[0.438rem] md:h-[18.75rem] md:px-[4.375rem] px-[2rem] py-[3.625rem]  flex flex-col md:flex-row justify-between text-white
        gap-y-12 md:gap-y-0
        "
        >
          <div className="flex-[0.45] flex flex-col justify-between gap-y-5">
            <div className="">
              <h2 className="font-raleway text-2xl md:text-[2.8rem] font-semibold md:leading-[3.2rem]">
                Let&apos;s Make Something Together for Results
              </h2>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium">Follow Our Social Media</p>
              <div className="flex gap-x-5">
                {socialLinks.map((item) => (
                  <Link
                    href={item.href}
                    title={item.title}
                    key={item.id}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <item.icon className="text-2xl" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-[0.45] flex flex-col justify-between gap-y-5">
            <div className="">
              <p>
                Subscribe to our newsletter to get regular updates on how you
                can transform your business.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 justify-between items-center">
              <div className="md:flex-[0.55] w-full md:w-fit">
                <input
                  type="text"
                  placeholder="E-mail Address"
                  className="w-full h-[3.5rem] outline-none rounded-[0.438rem] px-4 text-black"
                />
              </div>
              <div className="md:flex-[0.4] w-full md:w-fit">
                <button className="w-full h-[3.5rem] outline-none rounded-[0.438rem] bg-btnbg font-raleway font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
