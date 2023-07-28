import { Container } from "../skeleton";

export const FAQs = () => {
  return (
    <div className="bg-primarybg">
      <div className="">
        <Container>
          <div className="py-20 text-white md:w-[60%] text-center mx-auto">
            <h2 className="text-4xl md:text-[4rem] font-raleway  font-semibold md:leading-[5rem] mb-[1.688rem]">
              We Are Here to Make Sure Your Business Succeeds
            </h2>
            <p className="text-[#F2F2F2]">
              With Biller Business Solution and our other platforms like Biller
              Vest and Biller Pay, we are here to assure you on the successful
              running of your business.
            </p>
          </div>
        </Container>
      </div>
      <div className="flex justify-center items-center flex-col ">
        <div className="py-8 bg-white w-full">
          <Container>
            <div className="md:w-[60%] mx-auto">
              <h2 className="text-[#252525] font-raleway text-[1.8rem] md:text-[2.5rem]">
                Frequently Asked Questions (FAQs)
              </h2>
            </div>
          </Container>
        </div>
        <Container>
          <div className="md:w-[60%] mx-auto py-16 md:py-24">
            <ul className="flex flex-col gap-y-7 list-decimal text-white">
              {faqs.map((item) => (
                <li key={item.id} className="text-base md:text-xl">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
};

const faqs = [
  {
    id: 1,
    title:
      "Is Biller Vest and Billerpay a subsidiary of Biller Business Solution?",
  },
  {
    id: 2,
    title: "Can i register on all 3 platforms?",
  },
  {
    id: 3,
    title: "Are there investment opportunities in Biller Business Solution?",
  },
  {
    id: 4,
    title:
      "Must my business be registered before i can enjoy all the benefits of Biller business solution?",
  },
  {
    id: 5,
    title: "Is Biller Business Solution hiring anyone now?",
  },
];
