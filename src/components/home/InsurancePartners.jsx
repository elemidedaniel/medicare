const PARTNERS = [
  "AXA Mansard",
  "Hygeia HMO",
  "Avon Healthcare",
  "Reliance HMO",
  "AIICO Insurance",
  "Leadway Health",
];

export default function InsurancePartners() {
  return (
    <section className="border-y border-border bg-warm px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate">
          Accepted Insurance &amp; HMO Partners
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="font-display text-lg font-semibold text-charcoal/30 transition-colors hover:text-primary"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}