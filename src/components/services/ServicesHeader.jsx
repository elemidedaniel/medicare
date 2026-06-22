import { ShieldCheck } from "lucide-react";

export default function ServicesHeader() {
  return (
    <section className="relative overflow-hidden bg-mint px-6 py-16 lg:py-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
          <ShieldCheck size={15} />
          6 Specialist Departments
        </span>
        <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
          Care for every part of you
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate">
          Every department at MediCare is staffed by board-certified
          specialists and equipped with modern diagnostics — so you get the
          right care, the first time.
        </p>
      </div>
    </section>
  );
}