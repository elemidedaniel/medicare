import { useForm } from "react-hook-form";
import { ArrowLeft, Check } from "lucide-react";

export default function BookingForm({ onBack, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-charcoal">Your details</h2>
      <p className="mt-2 text-sm text-slate">
        We'll use this to confirm your appointment and send reminders.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field
            label="Full Name"
            error={errors.fullName}
            inputProps={register("fullName", { required: "Full name is required" })}
            placeholder="Adaeze Okonkwo"
          />
          <Field
            label="Phone Number"
            error={errors.phone}
            inputProps={register("phone", {
              required: "Phone number is required",
              pattern: { value: /^[0-9+\s-]{7,}$/, message: "Enter a valid phone number" },
            })}
            placeholder="0801 234 5678"
            type="tel"
          />
        </div>

        <Field
          label="Email Address"
          error={errors.email}
          inputProps={register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email address" },
          })}
          placeholder="adaeze@email.com"
          type="email"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field
            label="Date of Birth"
            error={errors.dob}
            inputProps={register("dob", { required: "Date of birth is required" })}
            type="date"
          />
          <div>
            <label className="mb-1.5 block text-sm font-medium text-charcoal">
              HMO / Insurance <span className="text-slate font-normal">(optional)</span>
            </label>
            <input
              {...register("insurance")}
              placeholder="e.g. Hygeia HMO"
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-slate/50 focus:border-primary focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-charcoal">
            Reason for Visit <span className="text-slate font-normal">(optional)</span>
          </label>
          <textarea
            {...register("notes")}
            rows={3}
            placeholder="Briefly describe your symptoms or reason for the visit..."
            className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-slate/50 focus:border-primary focus:outline-none"
          />
        </div>

        <label className="flex items-start gap-3 text-xs leading-relaxed text-slate">
          <input
            type="checkbox"
            {...register("consent", { required: "Please confirm to continue" })}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-primary"
          />
          I consent to MediCare collecting my information to schedule and manage
          this appointment, in line with the clinic's privacy policy.
        </label>
        {errors.consent && <p className="-mt-3 text-xs text-coral">{errors.consent.message}</p>}

        <div className="mt-3 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-slate transition-colors hover:bg-mint hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
          >
            <Check size={16} />
            Confirm Appointment
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, error, inputProps, placeholder, type = "text" }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-charcoal">{label}</label>
      <input
        {...inputProps}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-slate/50 focus:outline-none ${
          error ? "border-coral focus:border-coral" : "border-border focus:border-primary"
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-coral">{error.message}</p>}
    </div>
  );
}