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
            7. Contact Us
          </h2>
          <p className="text-[#8A8A8A] text-base md:text-lg ">
            For any inquiries or concerns, feel free to contact us at:
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
    body: "We may collect personal information such as name, email address, and contact number when you register on our platforms or contact us for inquiries. As part of our KYC (Know Your Customer) process, we may also collect sensitive information including government-issued ID and proof of life to verify the identity of our customers. This process helps us maintain a safe and secure environment for all users.",
  },
  {
    header: "Use of Information",
    body: "We use the collected information to provide and improve our services, respond to inquiries, send updates about our offerings, and for customer verification processes to comply with legal and regulatory requirements.",
  },
  {
    header: "Information Security",
    body: "We are committed to ensuring the security of your information. We have implemented reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. Sensitive information such as government-issued IDs and proof of life documents are handled with utmost confidentiality and stored securely.",
  },
  {
    header: "Information Sharing",
    body: "We do not sell or share your personal information with third parties, except as necessary to provide our services, comply with legal obligations, or as detailed in this privacy policy.",
  },
  {
    header: "Your Rights",
    body: "You have the right to access, correct, or delete your personal information held by us. To exercise these rights, please contact us using the details provided below.",
  },
];
