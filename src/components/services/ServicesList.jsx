import { Clock, Banknote, CheckCircle2, ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import { services } from "../../data/services";

export default function ServicesList() {
  return (
    <section className="bg-warm px-6 py-16 lg:py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        {services.map((service, i) => {
          const Icon = service.icon;
          const reversed = i % 2 === 1;

          return (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-24 overflow-hidden rounded-[2rem] border border-border bg-white"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-5 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Visual / icon side */}
                <div className="flex flex-col justify-center gap-4 bg-mint p-8 lg:col-span-2 lg:p-10">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                    <Icon size={26} strokeWidth={1.8} />
                  </span>
                  <h2 className="font-display text-2xl font-semibold text-charcoal">
                    {service.name}
                  </h2>
                  <p className="text-sm leading-relaxed text-slate">{service.longDescription}</p>

                  <div className="mt-2 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm text-charcoal">
                      <Clock size={15} className="text-primary" />
                      {service.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-charcoal">
                      <Banknote size={15} className="text-primary" />
                      From {service.startingPrice}
                    </div>
                  </div>
                </div>

                {/* Treatments list side */}
                <div className="flex flex-col justify-center gap-5 p-8 lg:col-span-3 lg:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-coral">
                    What We Treat
                  </p>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {service.treatments.map((t) => (
                      <li key={t} className="flex items-start gap-2.5 text-sm text-charcoal">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <Button
                    to="/booking"
                    variant="coral"
                    size="md"
                    icon={ArrowRight}
                    className="mt-2 w-fit"
                  >
                    Book {service.name}
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}