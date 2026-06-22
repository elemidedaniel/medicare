import { LayoutDashboard, Calendar, FileText, Pill, User, LogOut } from "lucide-react";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Overview", id: "overview" },
  { icon: Calendar, label: "Appointments", id: "appointments" },
  { icon: Pill, label: "Prescriptions", id: "prescriptions" },
  { icon: FileText, label: "Records", id: "records" },
  { icon: User, label: "Profile", id: "profile" },
];

export default function PortalSidebar({ active, onChange, onLogout, patientEmail }) {
  const initials = patientEmail?.[0]?.toUpperCase() || "P";

  return (
    <aside className="flex w-full flex-col gap-1 border-b border-border bg-white p-4 lg:h-full lg:w-64 lg:border-b-0 lg:border-r lg:p-6">
      <div className="mb-4 hidden items-center gap-3 lg:flex">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
          {initials}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-charcoal">{patientEmail}</p>
          <p className="text-xs text-slate">Patient</p>
        </div>
      </div>

      <div className="flex gap-1 overflow-x-auto lg:flex-col lg:overflow-visible">
        {NAV_ITEMS.map(({ icon: Icon, label, id }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors lg:w-full ${
                isActive ? "bg-mint text-primary" : "text-slate hover:bg-mint/50"
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          );
        })}
      </div>

      <button
        onClick={onLogout}
        className="mt-2 hidden items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-coral hover:bg-coral/5 lg:mt-auto lg:flex"
      >
        <LogOut size={16} />
        Sign Out
      </button>
    </aside>
  );
}