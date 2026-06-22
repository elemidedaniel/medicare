import { HeartHandshake, Microscope, Users2, ShieldCheck } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Patient-First, Always",
    description: "Every decision — from appointment length to facility design — is made by asking what serves the patient, not the schedule.",
  },
  {
    icon: Microscope,
    title: "Evidence-Based Care",
    description: "Our physicians stay current with the latest clinical research and treatment protocols, reviewed quarterly by our medical board.",
  },
  {
    icon: Users2,
    title: "Genuine Accessibility",
    description: "Transparent pricing, same-day slots where possible, and a team that explains things in plain language — no jargon, no guesswork.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Standards",
    description: "ISO-certified facilities, rigorous hygiene protocols, and annual third-party audits across every department.",
  },
];

export default function OurValues() {
  return (
    <section className="bg-mint px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What We Stand For"
          title="The principles behind every appointment"
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {VALUES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mint text-primary">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-charcoal">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}