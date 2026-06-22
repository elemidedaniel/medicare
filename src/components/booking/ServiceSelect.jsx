import { ArrowRight } from "lucide-react";
import { services } from "../../data/services";

export default function ServiceSelect({ selected, onSelect, onNext }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-charcoal">
        What do you need care for?
      </h2>
      <p className="mt-2 text-sm text-slate">
        Select a department to see available doctors and time slots.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          const isSelected = selected?.id === service.id;

          return (
            <button
              key={service.id}
              onClick={() => onSelect(service)}
              className={`flex items-start gap-4 rounded-2xl border-2 p-5 text-left transition-all ${
                isSelected
                  ? "border-primary bg-mint"
                  : "border-border bg-white hover:border-primary/30"
              }`}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                  isSelected ? "bg-primary text-white" : "bg-mint text-primary"
                }`}
              >
                <Icon size={20} strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-charcoal">
                  {service.name}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate">{service.description}</p>
                <p className="mt-2 text-xs font-semibold text-primary">
                  From {service.startingPrice}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex justify-end">
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