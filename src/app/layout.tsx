import "@/assets/styles/globals.css";
import { Footer } from "@/components/skeleton/footer";
import type { Metadata } from "next";
import { Poppins, Raleway } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["600"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Biller Business Solution",
  description:
    "Biller Business Solutions is a technology consulting firm that offers a range of innovative and practical solutions to help businesses optimize their operations and achieve their strategic goals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${raleway.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
