import Hero from "../components/Hero";
import Header from "../components/Header";
import HowWeWork from "../components/HowWeWork";
import Organizations from "../components/Organizations";
import ServicesGrid from "../components/ServicesGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <Organizations />
      <WhyChooseUs />
      <HowWeWork />
      <Footer />
    </main>
  );
}