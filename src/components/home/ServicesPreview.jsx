import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { services } from "../../data/services";

export default function ServicesPreview() {
  return (
    <section className="bg-warm px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What We Treat"
            title="Care across every stage of life"
            description="From routine checkups to specialist treatment, our departments are built around how people actually live — not just how hospitals are organized."
          />
          <Button to="/services" variant="ghost" icon={ArrowUpRight} className="shrink-0">
            View All Services
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, icon: Icon, name, description }) => (
            <Link
              key={id}
              to="/services"
              className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-charcoal">{name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate">{description}</p>
              </div>
              <span className="mt-auto flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowUpRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}