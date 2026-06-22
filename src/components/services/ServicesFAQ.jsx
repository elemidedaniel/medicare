import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const FAQS = [
  {
    q: "Do I need a referral to see a specialist?",
    a: "No. You can book directly with any specialist department through our online booking system. If you're unsure which department fits your symptoms, use the symptom finder on our homepage or call our patient line.",
  },
  {
    q: "What insurance and HMO plans do you accept?",
    a: "We accept most major HMO plans including AXA Mansard, Hygeia HMO, Avon Healthcare, Reliance HMO, AIICO Insurance, and Leadway Health. Bring your HMO ID to your appointment, or confirm coverage with our front desk before booking.",
  },
  {
    q: "Can I get same-day appointments?",
    a: "Yes, for many departments. General Medicine and Pediatrics typically have same-day slots available. Specialist departments like Cardiology and Neurology may have shorter same-day availability — booking 1–2 days ahead is recommended.",
  },
  {
    q: "What should I bring to my first appointment?",
    a: "A valid ID, your HMO card (if applicable), a list of current medications, and any prior medical records or test results relevant to your visit. Arriving 15 minutes early helps keep things running on time.",
  },
  {
    q: "Do you offer telemedicine consultations?",
    a: "Select departments including General Medicine and Dermatology offer virtual consultations for follow-ups and non-urgent concerns. You can select this option during booking.",
  },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-mint px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Common Questions"
          title="Before you book"
          align="center"
        />

        <div className="mt-10 flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-border bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-charcoal">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen ? "bg-primary text-white" : "bg-mint text-primary"
                    }`}
                  >
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-slate">{faq.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}