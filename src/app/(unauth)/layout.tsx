import { NewsLetterForm } from "@/components/common/newsletter-form";
import { UnAuthNavbar } from "@/components/navbar/UnAuthNavbar";
import WhatsAppBtn from "@/components/whatsappbtn";

export default function UnAuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UnAuthNavbar />
      {children}
      <NewsLetterForm />
      <WhatsAppBtn />
    </>
  );
}
