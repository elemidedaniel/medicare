export default function DoctorFilter({ specialties, active, onChange }) {
  return (
    <div className="sticky top-[73px] z-30 border-b border-border bg-warm/95 px-6 py-4 backdrop-blur-md lg:top-[121px]">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-2.5 overflow-x-auto">
        {specialties.map((s) => {
          const isActive = active === s;
          return (
            <button
              key={s}
              onClick={() => onChange(s)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-white text-slate hover:bg-mint hover:text-primary"
              }`}
            >
              {s}
            </button>
          );
        })}
      </div>
    </div>
  );
}