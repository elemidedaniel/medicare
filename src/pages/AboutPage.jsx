import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import OurValues from "../components/about/OurValues";
import Milestones from "../components/about/Milestones";
import VitalsStrip from "../components/home/VitalsStrip";
import CTASection from "../components/home/CTASection";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <VitalsStrip />
      <OurValues />
      <Milestones />
      <CTASection />
    </>
  );
}