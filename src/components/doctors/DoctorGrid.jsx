import { Frown } from "lucide-react";
import DoctorCard from "./DoctorCard";

export default function DoctorGrid({ doctors, onViewProfile }) {
  if (doctors.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 py-20 text-center">
        <Frown size={32} className="text-slate/40" />
        <p className="font-display text-lg font-semibold text-charcoal">
          No doctors found in this specialty
        </p>
        <p className="text-sm text-slate">Try selecting a different department above.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} onViewProfile={onViewProfile} />
      ))}
    </div>
  );
}