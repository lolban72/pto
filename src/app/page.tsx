import Hero from "../components/Hero";
import ServicesShowcase from "../components/ServicesShowcase";
import AudienceProcess from "../components/AudienceProcess";
import FooterNew from "../components/FooterNew";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesShowcase />
      <AudienceProcess />
      <FooterNew />
    </main>
  );
}