import { useState } from "react";
import { Phone, X, AlertCircle } from "lucide-react";

export default function EmergencyButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-64 rounded-2xl border border-border bg-white p-5 shadow-xl">
          <div className="flex items-start gap-2.5">
            <AlertCircle size={18} className="mt-0.5 shrink-0 text-coral" />
            <div>
              <p className="font-display text-sm font-semibold text-charcoal">
                Medical Emergency?
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate">
                Call our 24/7 emergency line immediately for urgent care.
              </p>
            </div>
          </div>
          <a
            href="tel:+2348001234567"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-coral py-2.5 text-sm font-semibold text-white transition-colors hover:bg-coral-dark"
          >
            <Phone size={14} />
            Call Now
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all hover:scale-105 ${
          open ? "bg-charcoal text-white" : "bg-coral text-white"
        }`}
        aria-label={open ? "Close emergency contact" : "Emergency contact"}
      >
        {open ? <X size={22} /> : <Phone size={20} />}
      </button>
    </div>
  );
}