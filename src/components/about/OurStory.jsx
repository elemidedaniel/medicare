import SectionHeading from "../ui/SectionHeading";
import Aboutimg from "../../assets/images/Aboutimg.png";

export default function OurStory() {
  return (
    <section className="bg-warm px-6 py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
        <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-mint-deep to-mint">
          <img
            src={Aboutimg}
            alt="Clinic interior"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Our Story"
            title="Built by physicians who were tired of rushed appointments"
          />
          <p className="text-base leading-relaxed text-slate">
            MediCare started with three doctors who shared the same
            frustration, watching patients get 8-minute appointments in
            facilities optimized for volume over outcomes. We set out to
            build something different: a clinic where physicians have time
            to actually think, and patients have time to actually be heard.
          </p>
          <p className="text-base leading-relaxed text-slate">
            A decade later, that founding principle hasn't changed. We've
            grown to eight specialist departments and over 40,000 patients,
            but every appointment still starts with the same question: what
            does this person actually need?
          </p>
        </div>
      </div>
    </section>
  );
}