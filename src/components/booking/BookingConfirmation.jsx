import { CheckCircle2, Calendar, Clock, User, Mail, Phone } from "lucide-react";
import { format } from "date-fns";
import Button from "../ui/Button";

export default function BookingConfirmation({ service, doctor, date, time, patient }) {
  const refNumber = `MC-${Date.now().toString().slice(-6)}`;

  return (
    <div className="flex flex-col items-center text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-mint text-primary">
        <CheckCircle2 size={32} strokeWidth={1.8} />
      </span>

      <h2 className="mt-5 font-display text-2xl font-semibold text-charcoal sm:text-3xl">
        Appointment Confirmed
      </h2>
      <p className="mt-2 max-w-md text-sm text-slate">
        A confirmation has been sent to <strong className="text-charcoal">{patient.email}</strong>.
        We'll also text a reminder 24 hours before your visit.
      </p>

      <div className="mt-4 rounded-full bg-mint px-4 py-1.5 text-xs font-semibold text-primary">
        Reference: {refNumber}
      </div>

      {/* Summary card */}
      <div className="mt-8 w-full max-w-md rounded-2xl border border-border bg-white p-6 text-left">
        <SummaryRow icon={User} label="Patient" value={patient.fullName} />
        <SummaryRow icon={Calendar} label="Date" value={format(date, "EEEE, MMMM d, yyyy")} />
        <SummaryRow icon={Clock} label="Time" value={time} />
        <SummaryRow icon={Mail} label="Department" value={service.name} />
        <SummaryRow icon={Phone} label="Doctor" value={doctor.name} last />
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button to="/" variant="outline" size="md">
          Back to Home
        </Button>
        <Button to="/doctors" variant="primary" size="md">
          View Other Doctors
        </Button>
      </div>
    </div>
  );
}

function SummaryRow({ icon: Icon, label, value, last = false }) {
  return (
    <div className={`flex items-center gap-3 py-3 ${!last ? "border-b border-border" : ""}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-mint text-primary">
        <Icon size={15} />
      </span>
      <div>
        <p className="text-[11px] uppercase tracking-wide text-slate">{label}</p>
        <p className="text-sm font-semibold text-charcoal">{value}</p>
      </div>
    </div>
  );
}