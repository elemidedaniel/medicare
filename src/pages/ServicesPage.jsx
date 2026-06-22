import ServicesHeader from "../components/services/ServicesHeader";
import ServicesList from "../components/services/ServicesList";
import ServicesFAQ from "../components/services/ServicesFAQ";
import CTASection from "../components/home/CTASection";

export default function ServicesPage() {
  return (
    <>
      <ServicesHeader />
      <ServicesList />
      <ServicesFAQ />
      <CTASection />
    </>
  );
}