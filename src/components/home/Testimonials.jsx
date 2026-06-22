import { Star, Quote } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-primary-dark px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Patient Stories"
          title="Trusted by thousands of families"
          align="center"
          light
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col gap-5 rounded-2xl bg-white/5 p-7 backdrop-blur-sm"
            >
              <Quote size={28} className="text-gold/40" />
              <p className="text-[15px] leading-relaxed text-white/85">"{t.quote}"</p>
              <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <p className="font-display text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={13} className="fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}