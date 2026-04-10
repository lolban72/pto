import AudienceProcess from "../components/AudienceProcess";
import CasesShowcase from "../components/CasesShowcase";
import ContactCtaCard from "../components/contact-cta-card";
import Footer from "../components/FooterNew";
import Hero from "../components/Hero";
import ServicesShowcase from "../components/ServicesShowcase";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <ServicesShowcase />
        <AudienceProcess />
        <CasesShowcase />
        <ContactCtaCard />
      </main>
      <Footer />
    </>
  );
}
