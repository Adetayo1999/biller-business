import { NewsLetterForm } from "@/components/common/newsletter-form";
import { UnAuthNavbar } from "@/components/navbar/UnAuthNavbar";

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
    </>
  );
}
