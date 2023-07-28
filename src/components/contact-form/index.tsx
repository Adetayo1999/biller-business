import { Container } from "../skeleton";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import Link from "next/link";

export const ContactForm = () => {
  return (
    <div className="bg-[#FAFAFA] py-[5.6rem]">
      <Container>
        <div className="">
          <div className="mb-[2.813rem]">
            <h2 className="text-4xl md:text-[4rem] font-raleway  font-semibold text-[#252525] md:leading-[5rem]">
              Get in Touch and Let Us Hear from You by Contact Us Now
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-y-10 md:gap-y-0 justify-between">
            <div className="md:flex-[0.5] flex flex-col gap-y-[3.5rem]">
              <div className="">
                <p className="text-[#8A8A8A]">
                  For any enquiry, feel free to contact us on all our social
                  media platforms or send us a message just here on the website
                  and our team will reach out to you as soon as possible.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-y-[3rem] md:gap-[3rem]">
                {contactFormData.map((item) => (
                  <div className="flex gap-x-[1.25rem]" key={item.id}>
                    <div className="w-[2.5rem] h-[2.5rem] flex-shrink-0 rounded-full bg-primarybg text-white flex justify-center items-center">
                      <item.icon />
                    </div>
                    <div className="">
                      <h5 className="text-[#252525] font-medium ">
                        {item.title}
                      </h5>
                      {item.href ? (
                        <Link
                          href={item.href}
                          target="_blank"
                          rel="noopener"
                          className="text-[#8A8A8A]"
                        >
                          {item.body}
                        </Link>
                      ) : (
                        <p className="text-[#8A8A8A]">{item.body}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:flex-[0.45]">
              <form action="" className="flex gap-y-[1.5rem] flex-col">
                <div className="flex gap-y-2 flex-col">
                  <label
                    htmlFor="email"
                    className="text-[#252525] text-lg font-medium"
                  >
                    E-mail Address
                  </label>
                  <input
                    type="text"
                    name="email"
                    id=""
                    placeholder="Insert Your E-mail Address Here"
                    className="h-[3.5rem] border-2 border-[#E2E2E2] rounded-[0.438rem] placeholder:text-[#8A8A8A] px-6 outline-none"
                  />
                </div>
                <div className="flex gap-y-2 flex-col">
                  <label
                    htmlFor="message"
                    className="text-[#252525] text-lg font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                    className=" border-2 border-[#E2E2E2] rounded-[0.438rem] placeholder:text-[#8A8A8A] p-6 outline-none"
                  ></textarea>
                </div>
                <div className="">
                  <button className="h-[3.5rem] w-full bg-primarybg text-white rounded-[0.438rem]">
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const contactFormData = [
  {
    id: 1,
    title: "Phone Number",
    body: "(+44) 7453835529",
    icon: BsFillTelephoneFill,
  },
  {
    id: 2,
    title: "Email Address",
    body: " billerbusinesssolution@gmail.com",
    icon: MdEmail,
    href: "mailto:billerbusinesssolution@gmail.com",
  },
  {
    id: 3,
    title: "Official Address",
    body: "8 Portal Way, Icon Tower, London, England, W3 6DU",
    icon: FaLocationDot,
  },
  {
    id: 4,
    title: "Visit Our Website",
    body: "www.biller-business.vercel.app",
    icon: BsGlobeEuropeAfrica,
    href: "https://biller-business.vercel.app",
  },
];
