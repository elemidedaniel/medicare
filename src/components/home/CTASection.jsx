import { Calendar, Phone } from "lucide-react";
import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section className="px-6 py-20 lg:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-center sm:px-16">
        {/* Decorative pulse line */}
        <svg
          className="absolute left-0 top-1/2 h-3 w-full -translate-y-1/2 text-white/10"
          viewBox="0 0 800 12"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 6 L280 6 L300 1 L320 11 L340 6 L800 6"
            stroke="currentColor"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="relative">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Your health doesn't wait. Neither should you.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/75">
            Book your appointment in under two minutes, or speak to our patient
            care team right now.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/booking" variant="coral" size="lg" icon={Calendar} iconPosition="left">
              Book an Appointment
            </Button>
            <Button href="tel:+2348001234567" variant="white" size="lg" icon={Phone} iconPosition="left">
              Call +234 800 MEDI-CARE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}