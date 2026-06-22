import { useMemo } from "react";
import { ArrowRight, ArrowLeft, Star, Clock } from "lucide-react";
import { doctors } from "../../data/doctors";

export default function DoctorSelect({ service, selected, onSelect, onNext, onBack }) {
  const matchingDoctors = useMemo(
    () => doctors.filter((d) => d.specialty === service?.name),
    [service]
  );

  const initials = (name) =>
    name.replace("Dr. ", "").split(" ").map((n) => n[0]).join("");

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-charcoal">Choose your doctor</h2>
      <p className="mt-2 text-sm text-slate">
        These specialists are available for{" "}
        <span className="font-semibold text-primary">{service?.name}</span>.
      </p>

      <div className="mt-8 flex flex-col gap-4">
        {matchingDoctors.map((doc) => {
          const isSelected = selected?.id === doc.id;
          return (
            <button
              key={doc.id}
              onClick={() => onSelect(doc)}
              className={`flex items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all sm:p-5 ${
                isSelected
                  ? "border-primary bg-mint"
                  : "border-border bg-white hover:border-primary/30"
              }`}
            >
              <span
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl font-display text-lg font-semibold ${
                  isSelected ? "bg-primary text-white" : "bg-mint-deep text-primary"
                }`}
              >
                {initials(doc.name)}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-base font-semibold text-charcoal">{doc.name}</h3>
                <p className="text-xs text-slate">{doc.title}</p>
                <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-slate">
                  <span className="flex items-center gap-1">
                    <Star size={12} className="fill-gold text-gold" />
                    <span className="font-semibold text-charcoal">{doc.rating}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {doc.experience}y exp
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-slate transition-colors hover:bg-mint hover:text-primary"
        >
          <ArrowLeft size={16} />
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!selected}
          className="flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-coral-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continue
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}