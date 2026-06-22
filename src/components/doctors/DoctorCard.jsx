import { Star, Clock, Calendar } from "lucide-react";
import Button from "../ui/Button";

export default function DoctorCard({ doctor, onViewProfile }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <button
        onClick={() => onViewProfile(doctor)}
        className="aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-mint-deep to-mint text-left"
      >
        <img
          src={doctor.image}
          alt={doctor.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </button>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-coral">
            {doctor.specialty}
          </p>
          <button onClick={() => onViewProfile(doctor)} className="text-left">
            <h3 className="mt-0.5 font-display text-base font-semibold text-charcoal hover:text-primary">
              {doctor.name}
            </h3>
          </button>
          <p className="text-xs text-slate">{doctor.title}</p>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate">
          <span className="flex items-center gap-1">
            <Star size={12} className="fill-gold text-gold" />
            <span className="font-semibold text-charcoal">{doctor.rating}</span>
            <span>({doctor.reviews})</span>
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {doctor.experience}y exp
          </span>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-slate">{doctor.bio}</p>

        <div className="mt-auto flex flex-col gap-2 pt-2">
          <p className="flex items-center gap-1.5 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {doctor.available}
          </p>
          <Button to="/booking" variant="primary" size="sm" icon={Calendar} iconPosition="left">
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
}