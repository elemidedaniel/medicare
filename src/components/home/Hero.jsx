import { ShieldCheck, Calendar, ArrowRight, Star } from "lucide-react";
import Button from "../ui/Button";
import Heroimg from "../../assets/images/Heroimg.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-mint">
      {/* Decorative background blob */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-coral/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        {/* Left: copy */}
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
            <ShieldCheck size={15} />
            Trusted by 40,000+ families across Lagos
          </span>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-charcoal sm:text-5xl lg:text-[3.4rem]">
            Healthcare that feels{" "}
            <span className="text-primary">human</span>, not hurried.
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-slate">
            MediCare brings together expert physicians, modern diagnostics, and
            genuine bedside manner, So every visit feels like it's actually
            about you.
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button to="/booking" variant="coral" size="lg" icon={Calendar} iconPosition="left">
              Book an Appointment
            </Button>
            <Button to="/doctors" variant="outline" size="lg" icon={ArrowRight}>
              Meet Our Doctors
            </Button>
          </div>

          {/* Social proof row */}
          <div className="mt-6 flex items-center gap-5 border-t border-primary/10 pt-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-mint bg-gradient-to-br from-primary-light to-primary"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
                <span className="ml-1.5 text-sm font-semibold text-charcoal">4.9/5</span>
              </div>
              <p className="text-sm text-slate">From 2,400+ patient reviews</p>
            </div>
          </div>
        </div>

        {/* Right: visual */}
        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-light to-primary-dark shadow-xl">
            {/* Replace with real clinic/doctor photo */}
            <img src={Heroimg} alt="Clinic" className="h-full w-full object-cover" />
          </div>

          {/* Floating card 1 */}
          <div className="absolute -left-6 top-10 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-lg sm:-left-10">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-mint text-primary">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-charcoal">ISO Certified</p>
              <p className="text-xs text-slate">Quality assured care</p>
            </div>
          </div>

          {/* Floating card 2 */}
          <div className="absolute -bottom-6 -right-2 rounded-2xl bg-white p-4 shadow-lg sm:-right-8">
            <p className="font-display text-2xl font-semibold text-primary">15 min</p>
            <p className="text-xs text-slate">Average wait time</p>
          </div>
        </div>
      </div>
    </section>
  );
}