import { useState } from "react";
import { ShieldCheck, UserCheck, Banknote, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";

const REASONS = [
  {
    icon: UserCheck,
    title: "Doctors who actually listen",
    description: "Unhurried appointments designed around your questions, not a clock.",
  },
  {
    icon: ShieldCheck,
    title: "Internationally certified",
    description: "ISO-certified facilities and protocols, audited annually for quality.",
  },
  {
    icon: Banknote,
    title: "Transparent pricing",
    description: "No hidden fees. Know your cost before you walk in — every time.",
  },
];

const SYMPTOM_MAP = [
  { keyword: "chest", department: "Cardiology" },
  { keyword: "heart", department: "Cardiology" },
  { keyword: "child", department: "Pediatrics" },
  { keyword: "kid", department: "Pediatrics" },
  { keyword: "skin", department: "Dermatology" },
  { keyword: "rash", department: "Dermatology" },
  { keyword: "tooth", department: "Dental Care" },
  { keyword: "teeth", department: "Dental Care" },
  { keyword: "headache", department: "Neurology" },
  { keyword: "migraine", department: "Neurology" },
];

export default function WhyMediCare() {
  const [symptom, setSymptom] = useState("");
  const [result, setResult] = useState(null);

  function handleFind(e) {
    e.preventDefault();
    const match = SYMPTOM_MAP.find((s) => symptom.toLowerCase().includes(s.keyword));
    setResult(match ? match.department : "General Medicine");
  }

  return (
    <section className="bg-mint px-6 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left: reasons */}
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Why MediCare"
            title="Healthcare built around trust, not throughput"
          />
          <div className="flex flex-col gap-7">
            {REASONS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <Icon size={19} />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-charcoal">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: symptom finder — advanced feature */}
        <div className="rounded-[2rem] bg-white p-8 shadow-md sm:p-10">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-coral/10 text-coral">
            <Search size={22} />
          </span>
          <h3 className="mt-5 font-display text-2xl font-semibold text-charcoal">
            Not sure what you need?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate">
            Tell us what's going on in your own words, and we'll point you to the
            right department to book with.
          </p>

          <form onSubmit={handleFind} className="mt-6 flex flex-col gap-3">
            <input
              type="text"
              value={symptom}
              onChange={(e) => setSymptom(e.target.value)}
              placeholder="e.g. &ldquo;My chest feels tight&rdquo;"
              className="w-full rounded-xl border border-border bg-warm px-4 py-3.5 text-sm text-charcoal placeholder:text-slate/60 focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Find the right care
            </button>
          </form>

          {result && (
            <div className="mt-5 flex items-center justify-between rounded-xl bg-mint p-4">
              <div>
                <p className="text-xs text-slate">We recommend</p>
                <p className="font-display text-base font-semibold text-primary">{result}</p>
              </div>
              <Link
                to="/booking"
                className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                Book now <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}