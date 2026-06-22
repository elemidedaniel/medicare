import { Check } from "lucide-react";

const STEPS = ["Service", "Doctor", "Date & Time", "Your Details"];

export default function BookingStepper({ currentStep }) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-8">
      <div className="flex items-center">
        {STEPS.map((label, i) => {
          const stepNum = i + 1;
          const isComplete = stepNum < currentStep;
          const isActive = stepNum === currentStep;

          return (
            <div key={label} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    isComplete
                      ? "bg-primary text-white"
                      : isActive
                      ? "bg-coral text-white"
                      : "bg-mint text-slate"
                  }`}
                >
                  {isComplete ? <Check size={16} /> : stepNum}
                </div>
                <span
                  className={`hidden text-xs font-medium sm:block ${
                    isActive ? "text-coral" : isComplete ? "text-primary" : "text-slate"
                  }`}
                >
                  {label}
                </span>
              </div>
              {stepNum !== STEPS.length && (
                <div
                  className={`mx-2 h-0.5 flex-1 rounded-full transition-colors ${
                    isComplete ? "bg-primary" : "bg-mint"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}