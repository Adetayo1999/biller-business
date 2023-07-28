"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { Container } from "@/components/skeleton";
import { FiSearch } from "react-icons/fi";
import { navigationData } from "@/constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { MobileNavbar } from "../MobileNavbar";

export const UnAuthNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = useCallback(() => {
    setIsMobileNavVisible((prev) => !prev);
  }, []);

  return (
    <>
      <header className="hidden md:block py-[1.938rem] mb-[6rem]">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="">
                <Image src={logo} alt="Biller Business Logo" />
              </Link>
              <div className="ml-[2.813rem] pl-[2.813rem] border-l-2 border-[#E8E8E8] ">
                <div className="w-[15rem] h-[3rem] relative">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search"
                    className="w-full h-full border-2 border-[#E8E8E8] rounded-[0.313rem] outline-none px-3 pl-10"
                  />
                  <FiSearch className="absolute text-primary top-[25%] left-4 text-xl" />
                </div>
              </div>
            </div>
            <nav className="flex items-center">
              <div className="pr-[3.5rem] mr-[3.5rem] border-r-2 border-[#E8E8E8] ">
                <ul className="flex gap-x-[3.5rem] ">
                  {navigationData.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.path}
                        className={`font-raleway transition duration-300 hover:text-primary border-b-2 pb-[0.438rem]   font-bold ${
                          pathname === item.path
                            ? "border-primary text-primary  "
                            : "text-[#252525]  border-transparent"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <button
                  className="bg-primarybg min-w-[9rem] h-[3rem] px-3 font-bold font-raleway rounded-md text-white"
                  onClick={() => router.push("/login")}
                >
                  Sign in
                </button>
              </div>
            </nav>
          </div>
        </Container>
      </header>
      <header className="block md:hidden mb-16 py-4 shadow-sm border-gray-400 border-opacity-30 border-b ">
        <Container>
          <div className="flex justify-between items-center">
            <div className="">
              <Link href="/" className="">
                <Image src={logo} alt="Biller Business Logo" width={80} />
              </Link>
            </div>
            <div className="">
              <button
                className="bg-primary p-3  px-4 rounded text-white"
                onClick={toggleMobileNav}
              >
                <RxHamburgerMenu fontSize={23} />
              </button>
            </div>
          </div>
        </Container>
      </header>
      <MobileNavbar
        isMobileNavVisible={isMobileNavVisible}
        toggleMobileNav={toggleMobileNav}
      />
    </>
  );
};
