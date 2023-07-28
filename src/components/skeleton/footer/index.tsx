import Image from "next/image";
import { Container } from "..";
import logoWhite from "@/assets/images/logo-white.png";
import { informationLinks, socialLinks, usefulLinks } from "@/constants";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="min-h-[8.75rem] bg-[#1A1A1A] pt-[6rem] pb-[4rem] text-white">
      <Container>
        <div className="flex flex-col gap-y-8 md:flex-row md:gap-y-0 justify-between mb-10 ">
          <div className="flex flex-col gap-y-6">
            <div className="">
              <div className="mb-1">
                <Image src={logoWhite} alt="Billerpay Logo" />
              </div>
              <div className="">
                <p className="text-sm">
                  Get in touch for long lasting business solutions.
                </p>
              </div>
            </div>
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

          <div className="">
            <div className="mb-[1.313rem]">
              <h5 className="text-[1.5rem] font-semibold">Company</h5>
            </div>
            <div className="">
              <div className="">
                <p className="mb-1">Call us:</p>
                <ul className="flex flex-col gap-y-3">
                  <li className="flex items-center gap-x-2">
                    <span>
                      <FaPhoneVolume className="text-xl" />
                    </span>
                    <span>08186711799</span>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span>
                      <FaPhoneVolume className="text-xl" />
                    </span>
                    <span>08132284613</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mb-[1.313rem]">
              <h5 className="text-[1.5rem] font-semibold">Useful Links</h5>
            </div>
            <div className="">
              <ul className="flex flex-col gap-y-5">
                {usefulLinks.map((item) => (
                  <li>
                    <Link
                      href={item.path}
                      className="flex  gap-x-2 items-center"
                    >
                      <span>
                        <MdKeyboardArrowRight className="text-xl" />
                      </span>
                      <span> {item.title} </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="">
            <div className="mb-[1.313rem]">
              <h5 className="text-[1.5rem] font-semibold">Information</h5>
            </div>
            <div className="">
              <ul className="flex flex-col gap-y-5">
                {informationLinks.map((item) => (
                  <li>
                    <Link
                      href={item.path}
                      className="flex  gap-x-2 items-center"
                    >
                      <span>
                        <MdKeyboardArrowRight className="text-xl" />
                      </span>
                      <span> {item.title} </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <p className="md:text-center">
            Copyright &copy; {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </footer>
  );
};
