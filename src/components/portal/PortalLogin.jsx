import { useState } from "react";
import { Lock, Mail, ArrowRight } from "lucide-react";

export default function PortalLogin({ onLogin }) {
  const [email, setEmail] = useState("");

  return (
    <div className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-mint px-6 py-16">
      <div className="w-full max-w-md rounded-[2rem] border border-border bg-white p-8 sm:p-10">
        <div className="flex flex-col items-center text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
            <Lock size={20} />
          </span>
          <h1 className="mt-4 font-display text-2xl font-semibold text-charcoal">Patient Portal</h1>
          <p className="mt-2 text-sm text-slate">
            Sign in to view appointments, prescriptions, and records.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLogin(email || "demo@patient.com");
          }}
          className="mt-8 flex flex-col gap-4"
        >
          <div>
            <label className="mb-1.5 block text-sm font-medium text-charcoal">Email Address</label>
            <div className="relative">
              <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate/50" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-xl border border-border bg-white py-3 pl-11 pr-4 text-sm text-charcoal placeholder:text-slate/50 focus:border-primary focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-charcoal">Password</label>
            <div className="relative">
              <Lock size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate/50" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-border bg-white py-3 pl-11 pr-4 text-sm text-charcoal placeholder:text-slate/50 focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Sign In
            <ArrowRight size={16} />
          </button>
        </form>

        <p className="mt-6 rounded-xl bg-mint p-3.5 text-center text-xs leading-relaxed text-slate">
          This is a preview. Enter any email and click Sign In to explore the
          portal dashboard — no real account needed.
        </p>
      </div>
    </div>
  );
}