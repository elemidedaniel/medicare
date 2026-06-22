import { MapPin } from "lucide-react";

export default function LocationMap() {
  return (
    <section className="bg-warm px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-72 w-full items-center justify-center rounded-[2rem] border border-border bg-mint sm:h-96">
          <div className="flex flex-col items-center gap-2 text-center">
            <MapPin size={28} className="text-primary" />
            <p className="font-display text-sm font-semibold text-charcoal">
              123 Adeola Odeku Street, Victoria Island, Lagos
            </p>
            <p className="text-xs text-slate">[ Embed Google Maps iframe here ]</p>
          </div>
        </div>
      </div>
    </section>
  );
}