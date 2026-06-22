import { Calendar, Clock, Stethoscope, User } from "lucide-react";
import { format } from "date-fns";

export default function BookingSummary({ service, doctor, date, time }) {
  const hasAnySelection = service || doctor || date || time;

  return (
    <div className="rounded-2xl border border-border bg-mint p-6">
      <h3 className="font-display text-base font-semibold text-charcoal">Your Appointment</h3>

      {!hasAnySelection ? (
        <p className="mt-3 text-sm text-slate">
          Your selections will appear here as you go.
        </p>
      ) : (
        <div className="mt-4 flex flex-col gap-4">
          {service && (
            <SummaryItem icon={Stethoscope} label="Department" value={service.name} />
          )}
          {doctor && <SummaryItem icon={User} label="Doctor" value={doctor.name} />}
          {date && (
            <SummaryItem icon={Calendar} label="Date" value={format(date, "EEE, MMM d")} />
          )}
          {time && <SummaryItem icon={Clock} label="Time" value={time} />}
        </div>
      )}

      {service && (
        <div className="mt-5 border-t border-primary/15 pt-4">
          <p className="text-xs text-slate">Estimated cost</p>
          <p className="font-display text-xl font-semibold text-primary">
            From {service.startingPrice}
          </p>
        </div>
      )}
    </div>
  );
}

function SummaryItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-primary">
        <Icon size={14} />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-wide text-slate">{label}</p>
        <p className="truncate text-sm font-semibold text-charcoal">{value}</p>
      </div>
    </div>
  );
}