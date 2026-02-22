import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyNigeria from "@/components/WhyNigeria";
import BusinessPillars from "@/components/BusinessPillars";
import IndustryFocus from "@/components/IndustryFocus";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyNigeria />
      <BusinessPillars />
      <IndustryFocus />
      <ContactForm />
      <Footer />
    </main>
  );
}
