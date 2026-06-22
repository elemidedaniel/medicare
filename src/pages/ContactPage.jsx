import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import LocationMap from "../components/contact/LocationMap";

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="bg-warm px-6 py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[1fr_1.4fr]">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <LocationMap />
    </>
  );
}