import Hero from "../components/home/Hero";
import VitalsStrip from "../components/home/VitalsStrip";
import ServicesPreview from "../components/home/ServicesPreview";
import WhyMediCare from "../components/home/WhyMediCare";
import DoctorsPreview from "../components/home/DoctorsPreview";
import Testimonials from "../components/home/Testimonials";
import InsurancePartners from "../components/home/InsurancePartners";
import CTASection from "../components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <VitalsStrip />
      <ServicesPreview />
      <WhyMediCare />
      <DoctorsPreview />
      <Testimonials />
      <InsurancePartners />
      <CTASection />
    </>
  );
}