import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    // No backend yet — simulate submission so the UI flow is complete and testable.
    console.log("Contact form submission:", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[2rem] border border-border bg-white p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mint text-primary">
          <CheckCircle2 size={28} />
        </span>
        <h3 className="mt-4 font-display text-xl font-semibold text-charcoal">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm text-slate">
          Thanks for reaching out — our patient care team will get back to you within 2 hours during business hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 rounded-[2rem] border border-border bg-white p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          error={errors.name}
          inputProps={register("name", { required: "Name is required" })}
          placeholder="Your name"
        />
        <Field
          label="Phone Number"
          error={errors.phone}
          inputProps={register("phone", { required: "Phone number is required" })}
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
        placeholder="you@email.com"
        type="email"
      />

      <div>
        <label className="mb-1.5 block text-sm font-medium text-charcoal">Subject</label>
        <select
          {...register("subject")}
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal focus:border-primary focus:outline-none"
        >
          <option>General Inquiry</option>
          <option>Insurance & Billing</option>
          <option>Appointment Question</option>
          <option>Feedback</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-charcoal">Message</label>
        <textarea
          {...register("message", { required: "Please enter a message" })}
          rows={4}
          placeholder="How can we help?"
          className={`w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-slate/50 focus:outline-none ${
            errors.message ? "border-coral focus:border-coral" : "border-border focus:border-primary"
          }`}
        />
        {errors.message && <p className="mt-1.5 text-xs text-coral">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-coral-dark"
      >
        <Send size={15} />
        Send Message
      </button>
    </form>
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