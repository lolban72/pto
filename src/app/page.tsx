import Hero from "../components/Hero";
import ServicesShowcase from "../components/ServicesShowcase";
import AudienceProcess from "../components/AudienceProcess";
import CasesShowcase from "../components/CasesShowcase";
import Footer from "../components/FooterNew";
import ContactCtaCard from "../components/contact-cta-card";

export default function HomePage() {
  return (
    <>
    <Hero />
    <ServicesShowcase />
    <AudienceProcess />
    <CasesShowcase />
    <ContactCtaCard />
    <Footer />
  </>
  );
}