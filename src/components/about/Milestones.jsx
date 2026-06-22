import SectionHeading from "../ui/SectionHeading";

const MILESTONES = [
  { year: "2014", text: "MediCare opens with 3 physicians and a single General Medicine department." },
  { year: "2017", text: "Cardiology and Pediatrics departments launch; patient base crosses 10,000." },
  { year: "2019", text: "ISO 9001 certification achieved; Dermatology and Dental Care open." },
  { year: "2022", text: "Neurology department launches; online booking system goes live." },
  { year: "2024", text: "40,000+ patients served; recognized as a Top 10 Lagos clinic by HealthNG." },
];

export default function Milestones() {
  return (
    <section className="bg-warm px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Our Journey" title="A decade of growth, one patient at a time" align="center" />

        <div className="relative mt-14 flex flex-col gap-10">
          {/* Vertical line */}
          <div className="absolute bottom-2 left-[27px] top-2 w-0.5 bg-border" />

          {MILESTONES.map((m) => (
            <div key={m.year} className="relative flex gap-6">
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                {m.year}
              </div>
              <p className="mt-3.5 text-sm leading-relaxed text-slate">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}