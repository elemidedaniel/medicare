import { useEffect } from "react";
import { X, Star, Clock, GraduationCap, Languages, Stethoscope, Calendar } from "lucide-react";
import Button from "../ui/Button";

export default function DoctorProfileModal({ doctor, onClose }) {
  // Lock body scroll while modal is open + allow Escape to close
  useEffect(() => {
    if (!doctor) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [doctor, onClose]);

  if (!doctor) return null;

  const initials = doctor.name
    .replace("Dr. ", "")
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-charcoal/50 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-[2rem] bg-white sm:rounded-[2rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-sm transition-colors hover:bg-mint"
          aria-label="Close profile"
        >
          <X size={18} />
        </button>

        {/* Header visual */}
        <div className="flex h-40 w-full items-center justify-center bg-gradient-to-br from-mint-deep to-mint sm:rounded-t-[2rem]">
          <span className="font-display text-5xl font-semibold text-primary/25">{initials}</span>
        </div>

        <div className="p-6 sm:p-8">
          {/* Name + specialty */}
          <p className="text-xs font-semibold uppercase tracking-wide text-coral">
            {doctor.specialty}
          </p>
          <h2 className="mt-1 font-display text-2xl font-semibold text-charcoal sm:text-3xl">
            {doctor.name}
          </h2>
          <p className="mt-0.5 text-sm text-slate">{doctor.title}</p>

          {/* Quick stats row */}
          <div className="mt-5 flex flex-wrap gap-4 border-y border-border py-4">
            <div className="flex items-center gap-2 text-sm">
              <Star size={15} className="fill-gold text-gold" />
              <span className="font-semibold text-charcoal">{doctor.rating}</span>
              <span className="text-slate">({doctor.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-charcoal">
              <Clock size={15} className="text-primary" />
              {doctor.experience} years experience
            </div>
          </div>

          {/* Bio */}
          <p className="mt-5 text-sm leading-relaxed text-slate">{doctor.bio}</p>

          {/* Focus areas */}
          <div className="mt-6">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-charcoal">
              <Stethoscope size={14} className="text-primary" />
              Focus Areas
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {doctor.focusAreas.map((f) => (
                <span
                  key={f}
                  className="rounded-full bg-mint px-3 py-1.5 text-xs font-medium text-primary"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-6">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-charcoal">
              <GraduationCap size={14} className="text-primary" />
              Education &amp; Training
            </p>
            <ul className="mt-2.5 flex flex-col gap-1.5">
              {doctor.education.map((e) => (
                <li key={e} className="text-sm text-slate">
                  {e}
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="mt-6">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-charcoal">
              <Languages size={14} className="text-primary" />
              Languages Spoken
            </p>
            <p className="mt-2 text-sm text-slate">{doctor.languages.join(", ")}</p>
          </div>

          {/* Availability + CTA */}
          <div className="mt-7 flex flex-col gap-3 rounded-2xl bg-mint p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-1.5 text-sm font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {doctor.available}
            </p>
            <Button to="/booking" variant="coral" size="md" icon={Calendar} iconPosition="left">
              Book with {doctor.name.replace("Dr. ", "Dr. ")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}