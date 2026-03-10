import CustomCursor from "@/components/portfolio/CustomCursor";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import WorkSection from "@/components/portfolio/WorkSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ServicesSection from "@/components/portfolio/ServicesSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
};

export default Index;
