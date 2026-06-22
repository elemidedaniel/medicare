import { Users } from "lucide-react";

export default function DoctorsHeader() {
  return (
    <section className="relative overflow-hidden bg-mint px-6 py-16 lg:py-20">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
          <Users size={15} />
          8 Board-Certified Specialists
        </span>
        <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
          Meet the people behind your care
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate">
          Every MediCare physician is hand-selected for both clinical
          excellence and genuine bedside manner. Filter by specialty to find
          the right fit.
        </p>
      </div>
    </section>
  );
}