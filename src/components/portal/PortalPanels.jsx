import { Calendar, Pill, FileText, Clock, Download, CheckCircle2 } from "lucide-react";

// ── Mock data — this preview has no backend, so content is static for demonstration ──
const UPCOMING_APPOINTMENT = {
  doctor: "Dr. Amara Okafor",
  specialty: "Cardiology",
  date: "Thursday, June 12",
  time: "4:30 PM",
};

const PAST_APPOINTMENTS = [
  { doctor: "Dr. Tunde Bakare", specialty: "General Medicine", date: "May 2, 2025", status: "Completed" },
  { doctor: "Dr. Amara Okafor", specialty: "Cardiology", date: "Mar 18, 2025", status: "Completed" },
  { doctor: "Dr. Funmi Adeyemi", specialty: "Pediatrics", date: "Jan 9, 2025", status: "Completed" },
];

const PRESCRIPTIONS = [
  { name: "Lisinopril 10mg", prescribedBy: "Dr. Amara Okafor", date: "Mar 18, 2025", refills: 2 },
  { name: "Amoxicillin 500mg", prescribedBy: "Dr. Tunde Bakare", date: "May 2, 2025", refills: 0 },
];

const RECORDS = [
  { name: "Blood Panel Results", date: "May 2, 2025", type: "Lab Report" },
  { name: "ECG Report", date: "Mar 18, 2025", type: "Diagnostic" },
  { name: "Annual Physical Summary", date: "Jan 9, 2025", type: "Visit Summary" },
];

// ── Overview ──
export function OverviewPanel({ patientEmail }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-charcoal">Welcome back</h1>
        <p className="mt-1 text-sm text-slate">{patientEmail}</p>
      </div>

      {/* Upcoming appointment card */}
      <div className="rounded-2xl bg-primary p-6 text-white">
        <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
          Upcoming Appointment
        </p>
        <h2 className="mt-2 font-display text-xl font-semibold">{UPCOMING_APPOINTMENT.doctor}</h2>
        <p className="text-sm text-white/80">{UPCOMING_APPOINTMENT.specialty}</p>
        <div className="mt-4 flex flex-wrap gap-4 border-t border-white/15 pt-4 text-sm">
          <span className="flex items-center gap-2">
            <Calendar size={15} /> {UPCOMING_APPOINTMENT.date}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={15} /> {UPCOMING_APPOINTMENT.time}
          </span>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <StatBox icon={Calendar} value={PAST_APPOINTMENTS.length + 1} label="Total Visits" />
        <StatBox icon={Pill} value={PRESCRIPTIONS.length} label="Active Prescriptions" />
        <StatBox icon={FileText} value={RECORDS.length} label="Medical Records" />
      </div>
    </div>
  );
}

function StatBox({ icon: Icon, value, label }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-5">
      <Icon size={18} className="text-primary" />
      <p className="mt-3 font-display text-2xl font-semibold text-charcoal">{value}</p>
      <p className="text-xs text-slate">{label}</p>
    </div>
  );
}

// ── Appointments ──
export function AppointmentsPanel() {
  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-charcoal">Appointments</h1>

      <div className="mt-6 rounded-2xl border-2 border-primary bg-mint p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">Upcoming</p>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="font-display text-base font-semibold text-charcoal">
              {UPCOMING_APPOINTMENT.doctor}
            </p>
            <p className="text-xs text-slate">
              {UPCOMING_APPOINTMENT.specialty} • {UPCOMING_APPOINTMENT.date} at{" "}
              {UPCOMING_APPOINTMENT.time}
            </p>
          </div>
          <button className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary shadow-sm">
            Reschedule
          </button>
        </div>
      </div>

      <p className="mb-3 mt-8 text-xs font-semibold uppercase tracking-wide text-slate">Past Visits</p>
      <div className="flex flex-col gap-3">
        {PAST_APPOINTMENTS.map((a, i) => (
          <div key={i} className="flex items-center justify-between rounded-2xl border border-border bg-white p-4">
            <div>
              <p className="text-sm font-semibold text-charcoal">{a.doctor}</p>
              <p className="text-xs text-slate">{a.specialty} • {a.date}</p>
            </div>
            <span className="flex items-center gap-1 text-xs font-medium text-primary">
              <CheckCircle2 size={13} /> {a.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Prescriptions ──
export function PrescriptionsPanel() {
  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-charcoal">Prescriptions</h1>
      <div className="mt-6 flex flex-col gap-3">
        {PRESCRIPTIONS.map((p, i) => (
          <div key={i} className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mint text-primary">
              <Pill size={18} />
            </span>
            <div className="flex-1">
              <p className="font-display text-sm font-semibold text-charcoal">{p.name}</p>
              <p className="text-xs text-slate">Prescribed by {p.prescribedBy} • {p.date}</p>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                p.refills > 0 ? "bg-mint text-primary" : "bg-coral/10 text-coral"
              }`}
            >
              {p.refills > 0 ? `${p.refills} refills left` : "No refills"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Records ──
export function RecordsPanel() {
  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-charcoal">Medical Records</h1>
      <div className="mt-6 flex flex-col gap-3">
        {RECORDS.map((r, i) => (
          <div key={i} className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mint text-primary">
              <FileText size={18} />
            </span>
            <div className="flex-1">
              <p className="font-display text-sm font-semibold text-charcoal">{r.name}</p>
              <p className="text-xs text-slate">{r.type} • {r.date}</p>
            </div>
            <button className="flex items-center gap-1.5 rounded-full bg-mint px-3.5 py-2 text-xs font-semibold text-primary">
              <Download size={13} /> Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Profile ──
export function ProfilePanel({ patientEmail }) {
  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-charcoal">Profile</h1>
      <div className="mt-6 rounded-2xl border border-border bg-white p-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <ProfileField label="Email" value={patientEmail} />
          <ProfileField label="Phone" value="+234 801 234 5678" />
          <ProfileField label="HMO Provider" value="Hygeia HMO" />
          <ProfileField label="Patient ID" value="MC-2024-08821" />
        </div>
        <button className="mt-6 rounded-full border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary hover:bg-mint">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

function ProfileField({ label, value }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate">{label}</p>
      <p className="mt-1 text-sm font-medium text-charcoal">{value}</p>
    </div>
  );
}