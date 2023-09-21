import { billerAddress, billerEmail, billerPhone } from "@/constants";
import { Container } from "../skeleton";

const Privacy = () => {
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
            8. Contact Us
          </h2>
          <p className="text-[#8A8A8A] text-base md:text-lg ">
            If you have any questions about this privacy policy, please contact
            us at:
          </p>
          <div className="">
            <p className="text-[#8A8A8A] text-base md:text-lg ">
              Phone:
              <a href={`tel:${billerPhone}`} className="text-blue-600">
                {" "}
                (+44) 7453835529
              </a>
            </p>
            <p className="text-[#8A8A8A] text-base md:text-lg ">
              Email:
              <a href={`mailto:${billerEmail}`} className="text-blue-600">
                {" "}
                {billerEmail}
              </a>
            </p>
            <p className="text-[#8A8A8A] text-base md:text-lg ">
              {billerAddress}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Privacy;

const data: Array<{ header: string; body: any }> = [
  {
    header: "Introduction",
    body: "At Biller Business Solution, we are committed to protecting the privacy of our users. This privacy policy outlines how we collect, use, and disclose personal information.",
  },
  {
    header: "Information Collection",
    body: "We collect personal information such as name, email address, and contact number during registration or inquiries. As part of our KYC process, we may also collect government-issued ID and proof of life for customer verification.",
  },
  {
    header: "Use of Information",
    body: "The collected information is used to provide and improve our services, respond to inquiries, and comply with legal and regulatory requirements",
  },
  {
    header: "Data Controller and DPO",
    body: (
      <>
        <span>
          The data controller for the website is Biller Business Solution. For
          any concerns regarding your data, please contact our Data Protection
          Officer at{" "}
        </span>{" "}
        <a
          href="mailto:dpo@billerbusiness.co"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 cursor-pointer "
        >
          DPO@billerbusiness.co
        </a>
        .
      </>
    ),
  },
  {
    header: "User Rights",
    body: "Users have rights under the GDPR to access, correct, or delete their personal information held by us. ",
  },
  {
    header: "Data Security",
    body: "We implement stringent security measures to protect your personal information from unauthorized access, use, or disclosure.",
  },
  {
    header: "Cookies Policy",
    body: "We use cookies to optimize our site and provide a better user experience. For more details, please refer to our separate [Cookies Policy](#).",
  },
];
