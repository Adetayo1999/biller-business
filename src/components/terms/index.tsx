import { billerAddress, billerEmail, billerPhone } from "@/constants";
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
        {/* <div className="">
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
              <a href="mailto:hello@billerbusiness.co" className="text-blue-600">
                {" "}
                hello@billerbusiness.co
              </a>
            </p>
            <p className="text-[#8A8A8A] text-base md:text-lg ">
              Address: 8 Portal Way, Icon Tower, London, England, W3 6DU
            </p>
          </div>
        </div> */}
      </div>
    </Container>
  );
};

export default TermsAndCondition;

const data: Array<{ header: string; body: any }> = [
  {
    header: "Introduction",
    body: "Welcome to Biller Business Solution. These comprehensive Terms & Conditions outline the rules and regulations for the use of our Website and Services, ensuring a clear understanding and agreement between the users and the company.",
  },
  {
    header: "User Eligibility",
    body: "Our platform is meticulously designed for users aged 18 years and above. By utilizing our services, users affirm their adherence to this age requirement, ensuring compliance with legal standards and responsible use of our platform.",
  },
  {
    header: "Contact Information",
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
    header: "Jurisdiction",
    body: "These terms and conditions are governed and interpreted under the laws of England, ensuring comprehensive legal oversight, adherence to established regulations, and resolution of any disputes within this legal framework.",
  },
  {
    header: "Registration Requirements",
    body: "Registration on our platform requires users to provide accurate, complete, and up-to-date personal information. This ensures a secure, personalized, and efficient user experience, fostering trust and reliability.",
  },
  {
    header: "Termination Policy",
    body: "We reserve the right to terminate or suspend user access in cases of violations of our terms and conditions, unauthorized activities, or any action that harms the integrity and security of our platform and its users.",
  },
  {
    header: "Limitation Of Liability",
    body: "While committed to providing exceptional services, Biller Business Solution is not liable for any damages, losses, or inconveniences arising from the use or inability to use our services, safeguarding our operations and continuity.",
  },
  {
    header: "Intellectual Property Rights",
    body: "All content, including text, graphics, logos, and images, available on our website is the exclusive property of Biller Business Solution, protected by international copyright, trademark, and intellectual property laws.",
  },
  {
    header: "Warranty and Disclaimer",
    body: "Our services are provided 'as is' without any express or implied warranties, including but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
  },
  {
    header: "Payment Policy",
    body: "All transactions conducted through our platform are secure, with detailed payment terms, conditions, and policies outlined to ensure clarity, transparency, and confidence in our payment processes.",
  },
  {
    header: "Prohibited Activities",
    body: "Users are strictly prohibited from engaging in unlawful activities, unauthorized access, and any action that violates our terms, policies, and the rights of other users or third parties.",
  },
  {
    header: "Third-Party Content",
    body: "Biller Business Solution is not responsible for any third-party content, activities, products, or services accessed via our platform, ensuring our focus on providing top-quality, reliable, and secure services to our users.",
  },
  {
    header: "Additional Provisions",
    body: "Any other provisions, updates, or changes pertinent to our terms and conditions will be communicated promptly to users, ensuring comprehensive coverage, understanding, and agreement.",
  },
  // {
  //   header: "Services",
  //   body: "Biller Business Solution offers a range of services including BillerVest and BillerPay, facilitating bill payments and wallet creations, primarily in Nigeria. We also provide business solutions tailored to unlock your business's true potential.",
  // }
];

const prevdata: Array<{ header: string; body: any }> = [
  {
    header: "Introduction",
    body: (
      <span>
        Welcome to Biller Business Solution. These terms and conditions outline the rules and regulations for the use of
        Biller Business Solution&apos;s Website, located at
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
