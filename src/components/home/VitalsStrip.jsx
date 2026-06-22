import { Users, Clock, Award, Activity } from "lucide-react";

const VITALS = [
  { icon: Users, value: "40,000+", label: "Patients Cared For" },
  { icon: Clock, value: "15 min", label: "Average Wait Time" },
  { icon: Award, value: "98.6%", label: "Patient Satisfaction" },
  { icon: Activity, value: "24/7", label: "Emergency Response" },
];

export default function VitalsStrip() {
  return (
    <section className="relative border-y border-primary/10 bg-primary-dark">
      {/* Thin pulse-line motif running across the top edge */}
      <svg
        className="absolute -top-px left-0 h-2 w-full text-primary-dark"
        viewBox="0 0 400 8"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 4 L140 4 L150 1 L160 7 L170 4 L400 4"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-10 sm:grid-cols-4">
        {VITALS.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold">
              <Icon size={19} />
            </span>
            <div>
              <p className="font-display text-xl font-semibold text-white sm:text-2xl">{value}</p>
              <p className="text-xs text-white/60 sm:text-sm">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}