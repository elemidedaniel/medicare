import { MessageCircle } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="bg-mint px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
          <MessageCircle size={15} />
          We typically respond within 2 hours
        </span>
        <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
          Get in touch
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate">
          Questions about a service, insurance coverage, or just want to talk
          to someone before booking? We're here.
        </p>
      </div>
    </section>
  );
}