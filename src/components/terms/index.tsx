import { Container } from "../skeleton";

const TermsAndCondition = () => {
  return (
    <Container>
      <div className="w-full flex flex-col gap-3 lg:gap-5 ">
        {data.map((item, i) => (
          <div className="" key={i}>
            <h2 className="text-xl md:text-[1.75rem] leading-normal font-semibold text-[#252525] font-raleway">
              {`${i + 1}. ${item.header}`}
            </h2>
            <p className="text-[#8A8A8A] text-base md:text-lg ">{item.body}</p>
          </div>
        ))}
        <div className="">
          <h2 className="text-xl md:text-[1.75rem] leading-normal font-semibold text-[#252525] font-raleway">
            7. Contact Us
          </h2>
          <p className="text-[#8A8A8A] text-base md:text-lg ">
            For any inquiries or concerns, feel free to contact us at:
          </p>
          <div className="">
            <p className="text-[#8A8A8A] text-base md:text-lg ">
              Phone:
              <a href="tel:+447453835529" className="text-blue-600">
                {" "}
                (+44) 7453835529
              </a>
            </p>
            <p className="text-[#8A8A8A] text-base md:text-lg ">
              Email:
              <a
                href="mailto:hello@billerbusiness.co"
                className="text-blue-600"
              >
                {" "}
                hello@billerbusiness.co
              </a>
            </p>
            <p className="text-[#8A8A8A] text-base md:text-lg ">
              Address: 8 Portal Way, Icon Tower, London, England, W3 6DU
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TermsAndCondition;

const data: Array<{ header: string; body: any }> = [
  {
    header: "Introduction",
    body: (
      <span>
        Welcome to Biller Business Solution. These terms and conditions outline
        the rules and regulations for the use of Biller Business Solution&apos;s
        Website, located at
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 cursor-pointer "
        >
          {" "}
          www.billerbusiness.co.
        </a>
      </span>
    ),
  },
  {
    header: "Services",
    body: "Biller Business Solution offers a range of services including but not limited to BillerVest and BillerPay, which facilitate bill payments and the creation of wallets, primarily in Nigeria. We also offer business solutions tailored to meet the unique needs of your business, helping you to unlock your business's true potential.",
  },
  {
    header: "User Obligations",
    body: "Users are expected to use our services responsibly and in accordance with all applicable laws and regulations. Misuse of our services is strictly prohibited.",
  },
  {
    header: "Intellectual Property",
    body: "All content available on the website, including but not limited to text, graphics, logos, and images, is the property of Biller Business Solution and is protected by copyright laws.",
  },
  {
    header: "Limitation of Liability",
    body: "Biller Business Solution shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services.",
  },
  {
    header: "Governing Law",
    body: "These terms and conditions shall be governed by the laws of England.",
  },
];
