import { ArrowUpRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { doctors } from "../../data/doctors";

export default function DoctorsPreview() {
  return (
    <section className="bg-warm px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Specialists"
            title="Meet the people behind your care"
            description="Every MediCare physician is board-certified and hand-selected not just for credentials, but for how they make patients feel."
          />
          <Button to="/doctors" variant="ghost" icon={ArrowUpRight} className="shrink-0">
            View All Doctors
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doc) => (
            <Link
              key={doc.id}
              to="/doctors"
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-mint-deep to-mint">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col gap-2 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-coral">
                  {doc.specialty}
                </p>
                <h3 className="font-display text-base font-semibold text-charcoal">
                  {doc.name}
                </h3>
                <p className="text-xs text-slate">{doc.experience} years experience</p>
                <div className="mt-1 flex items-center gap-1">
                  <Star size={13} className="fill-gold text-gold" />
                  <span className="text-xs font-semibold text-charcoal">{doc.rating}</span>
                  <span className="text-xs text-slate">({doc.reviews})</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}