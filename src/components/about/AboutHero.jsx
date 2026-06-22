import { Heart } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-mint px-6 py-16 lg:py-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-coral/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
          <Heart size={15} />
          Founded in 2014
        </span>
        <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
          Medicine, practiced the way it should be
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate">
          MediCare was founded on a simple belief — that good healthcare
          requires both clinical excellence and genuine human attention.
          We've spent a decade building a clinic that delivers both.
        </p>
      </div>
    </section>
  );
}