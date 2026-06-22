import { useState, useMemo } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { addDays, format, isSameDay, startOfToday } from "date-fns";

const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM",
];

// Deterministic pseudo-availability so the UI feels real without a backend.
// Swap this for a real API call when one exists.
function isSlotTaken(date, time) {
  const seed = date.getDate() + time.length;
  return seed % 5 === 0;
}

export default function DateTimePicker({ selectedDate, selectedTime, onSelectDate, onSelectTime, onNext, onBack }) {
  const today = startOfToday();
  const days = useMemo(() => Array.from({ length: 14 }, (_, i) => addDays(today, i)), [today]);

  const availableSlots = useMemo(() => {
    if (!selectedDate) return [];
    return TIME_SLOTS.map((time) => ({
      time,
      taken: isSlotTaken(selectedDate, time),
    }));
  }, [selectedDate]);

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-charcoal">Pick a date &amp; time</h2>
      <p className="mt-2 text-sm text-slate">Choose what works best for your schedule.</p>

      {/* Date strip */}
      <div className="mt-7 flex gap-2.5 overflow-x-auto pb-2">
        {days.map((day) => {
          const isSelected = selectedDate && isSameDay(day, selectedDate);
          return (
            <button
              key={day.toISOString()}
              onClick={() => onSelectDate(day)}
              className={`flex shrink-0 flex-col items-center gap-1 rounded-2xl border-2 px-4 py-3 transition-all ${
                isSelected
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-white text-charcoal hover:border-primary/30"
              }`}
            >
              <span className={`text-[11px] font-medium ${isSelected ? "text-white/80" : "text-slate"}`}>
                {format(day, "EEE")}
              </span>
              <span className="font-display text-lg font-semibold">{format(day, "d")}</span>
              <span className={`text-[10px] ${isSelected ? "text-white/70" : "text-slate"}`}>
                {format(day, "MMM")}
              </span>
            </button>
          );
        })}
      </div>

      {/* Time slots */}
      {selectedDate && (
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-charcoal">
            Available times — {format(selectedDate, "EEEE, MMMM d")}
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2.5 sm:grid-cols-4">
            {availableSlots.map(({ time, taken }) => {
              const isSelected = selectedTime === time;
              return (
                <button
                  key={time}
                  disabled={taken}
                  onClick={() => onSelectTime(time)}
                  className={`rounded-xl border-2 py-2.5 text-sm font-medium transition-all ${
                    taken
                      ? "cursor-not-allowed border-border bg-mint/40 text-slate/40 line-through"
                      : isSelected
                      ? "border-primary bg-primary text-white"
                      : "border-border bg-white text-charcoal hover:border-primary/30"
                  }`}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-slate transition-colors hover:bg-mint hover:text-primary"
        >
          <ArrowLeft size={16} />
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!selectedDate || !selectedTime}
          className="flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-coral-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continue
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}