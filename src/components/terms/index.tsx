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
            9. Contact Us
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
          href="https://billerbusiness.co"
        >
          {" "}
          www.billerbusiness.co.
        </a>
      </span>
    ),
  },
  {
    header: "User Eligibility",
    body: "The website and its services are intended for users who are 18 years of age and above. By using our services, you represent that you meet the age requirement.",
  },
  {
    header: "Services",
    body: "Biller Business Solution offers a range of services including BillerVest and BillerPay, facilitating bill payments and wallet creations, primarily in Nigeria. We also provide business solutions tailored to unlock your business's true potential.",
  },
  {
    header: "Registration Requirements",
    body: "Users may be required to register and provide certain personal information to access specific features or services.",
  },
  {
    header: "Intellectual Property",
    body: "All content available on the website, including but not limited to text, graphics, logos, and images, is the property of Biller Business Solution and is protected by copyright laws.",
  },
  {
    header: "Limitation Of Liability",
    body: "Biller Business Solution shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services.",
  },
  {
    header: "Prohibited Activities",
    body: "Users are prohibited from engaging in activities that violate the laws and regulations, infringe on the rights of others, or interfere with the functioning of the website.",
  },
  {
    header: "Jurisdiction",
    body: "These terms and conditions shall be governed by the laws of England.",
  },
];
