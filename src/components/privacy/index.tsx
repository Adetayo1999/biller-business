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
        {/* <div className="">
          <h2 className="text-xl md:text-[1.75rem] leading-normal font-semibold text-[#252525] font-raleway">
            8. Contact Us
          </h2>
          <p className="text-[#8A8A8A] text-base md:text-lg ">
            If you have any questions about this privacy policy, please contact us at:
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
            <p className="text-[#8A8A8A] text-base md:text-lg ">{billerAddress}</p>
          </div>
        </div> */}
      </div>
    </Container>
  );
};

export default Privacy;

const data: Array<{ header: string; body: any }> = [
  {
    header: "Update",
    body: (
      <>
        <span>
          Update our website, Terms & Conditions, and Privacy Policy with the complete details of our legal entity.
          Below are the details:
        </span>

        <div className="">
          <p className="text-[#8A8A8A] text-base md:text-lg ">Legal Name: Biller Business Solution Ltd</p>
          <p className="text-[#8A8A8A] text-base md:text-lg ">Registration Number: 14670232</p>
          <p className="text-[#8A8A8A] text-base md:text-lg ">
            Registered Address: 8 Portal Way, Icon Tower, London, England, W3 6DU
          </p>
        </div>
      </>
    ),
  },
  {
    header: "Introduction",
    body: "At Biller Business Solution, we prioritize the privacy and security of our users' information. This Privacy Policy outlines our commitment to safeguarding your data and the practices we employ to ensure this protection.",
  },
  {
    header: "Company Contact Information",
    body: (
      <>
        <span>
          For any questions, concerns, or clarifications regarding our privacy practices, please contact us at:
        </span>

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
          <p className="text-[#8A8A8A] text-base md:text-lg ">{billerAddress}</p>
        </div>
      </>
    ),
  },
  {
    header: "Information Collection",
    body: "We collect a diverse range of personal information to enhance user experience and service delivery. This includes names, email addresses, contact numbers, and government-issued IDs. This data is gathered through secure website forms, ensuring the utmost confidentiality and security.",
  },
  {
    header: "Purpose of Information Use",
    body: "The collected information is utilized for a multitude of purposes. It enables us to provide and improve our services, respond promptly to customer inquiries, and ensure strict compliance with legal and regulatory standards. It aids in personalizing the user experience, offering tailored services, and ensuring seamless and effective communication.",
  },
  {
    header: "Information Storage and Protection",
    body: "All user information is stored on highly secure, encrypted servers, safeguarded with cutting-edge security protocols. Access to this information is stringently limited to authorized personnel, ensuring the highest level of data protection. Regular security audits and updates further reinforce our commitment to data security.",
  },
  {
    header: "Cookies and Tracking Technologies",
    body: "Our website employs sophisticated cookies and other tracking technologies to optimize user experience and analyze intricate website traffic patterns. These technologies assist in enhancing website functionality, ensuring smooth navigation, and collecting valuable insights for continuous improvement.",
  },
  {
    header: "User Rights and Opt-Out Options",
    body: "Users retain the right to access, modify, or delete their personal information stored with us at any time. Clear and convenient opt-out options for data collection and usage are available, ensuring users have complete autonomy and control over their information.",
  },
  {
    header: "Data Controller and DPO",
    body: (
      <>
        <span>
          The data controller for the website is Biller Business Solution. For any concerns regarding your data, please
          contact our Data Protection Officer at{" "}
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
  // {
  //   header: "User Rights",
  //   body: "Users have rights under the GDPR to access, correct, or delete their personal information held by us. ",
  // },
  // {
  //   header: "Data Security",
  //   body: "We implement stringent security measures to protect your personal information from unauthorized access, use, or disclosure.",
  // },
  // {
  //   header: "Cookies Policy",
  //   body: "We use cookies to optimize our site and provide a better user experience. For more details, please refer to our separate [Cookies Policy](#).",
  // },
];
