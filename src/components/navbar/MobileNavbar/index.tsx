"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";
import { usePathname } from "next/navigation";
import { navigationData } from "@/constants";

type MobileNavbarProps = {
  toggleMobileNav(): void;
  isMobileNavVisible: boolean;
};

export const MobileNavbar = ({
  toggleMobileNav,
  isMobileNavVisible,
}: MobileNavbarProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`fixed inset-0 w-full h-[100vh] bg-[#00000040] ${
        isMobileNavVisible ? "visible opacity-100" : "invisible opacity-0"
      }  transition-all duration-[.5s] z-[50] md:hidden`}
      onClick={() => toggleMobileNav()}
    >
      <nav
        className={`flex flex-col w-[70%] max-w-sm py-6 px-6 bg-white  overflow-y-auto h-full  transition-all duration-[.5s]
        ${isMobileNavVisible ? "translate-x-0" : "translate-x-[-100%] shadow"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center mb-12">
          <Link
            href={pathname.includes("business") ? "/business" : "/"}
            className="mr-auto font-bold relative  w-32 h-10"
            onClick={toggleMobileNav}
          >
            <Image
              src={Logo}
              width={80}
              alt="logo"
              className="object-contain"
            />
          </Link>
          <button className="navbar-close" onClick={() => toggleMobileNav()}>
            <svg
              className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            {navigationData.map((item) => (
              <li className="mb-1" key={item.id}>
                <Link
                  className={`block p-4  font-semibold   hover:text-primary rounded ${
                    pathname === item.path ? "text-primary" : "text-gray-400"
                  } `}
                  href={item.path}
                  onClick={toggleMobileNav}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <div className="pt-6">
            <Link
              className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-primarybg text-white rounded-xl"
              href={`${pathname.includes("business") ? "/business" : ""}/login`}
              onClick={toggleMobileNav}
            >
              Sign in
            </Link>
            <Link
              className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-primary  rounded-xl"
              href={`${
                pathname.includes("business") ? "/business" : ""
              }/signup`}
              onClick={toggleMobileNav}
            >
              Sign Up
            </Link>
          </div>
          <p className="my-4 text-xs text-center text-gray-400">
            <span>Copyright © {new Date().getFullYear()}</span>
          </p>
        </div>
      </nav>
    </div>
  );
};
