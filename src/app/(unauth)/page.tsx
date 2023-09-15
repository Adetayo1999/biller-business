import { FreshDiscussions } from "@/components/common/fresh-discussions";
import { Partners } from "@/components/common/partners";
import { ContactForm } from "@/components/contact-form";
import { CreateBrand } from "@/components/create-brand";
import { FAQs } from "@/components/faqs";
import { HeroSection } from "@/components/hero-section";
import { Investment } from "@/components/investment";
import { RefreshBrand } from "@/components/refresh-brand";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-[7rem]  ">
      <HeroSection />
      <Partners />
      <RefreshBrand />
      <Investment />
      <FAQs />
      <ContactForm />
      <CreateBrand />
      <FreshDiscussions />
    </main>
  );
}
