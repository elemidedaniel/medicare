import { Link } from "react-router-dom";
import { Stethoscope, MapPin, Phone, Mail, Clock } from "lucide-react";

// lucide-react doesn't ship brand/logo icons, so these are small inline SVGs
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 5.92c-.74.33-1.53.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.47-1.68.82-2.62 1a4.1 4.1 0 0 0-7 3.74A11.65 11.65 0 0 1 3.39 4.6a4.1 4.1 0 0 0 1.27 5.47 4.07 4.07 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.29 4.02 4.1 4.1 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.57 11.6 11.6 0 0 0 8.29 20.5c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53.8-.58 1.5-1.3 2.04-2.13z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <Stethoscope size={19} strokeWidth={2.2} />
              </span>
              <span className="font-display text-xl font-semibold">
                Medi<span className="text-gold">Care</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Trusted, compassionate healthcare for you and your family.
              Modern medicine, delivered with genuine care.
            </p>
            <div className="mt-5 flex gap-3">
              {[FacebookIcon, InstagramIcon, TwitterIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold hover:text-primary-dark"
                  aria-label="Social link"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-base font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/65">
              {[
                { label: "Our Services", href: "/services" },
                { label: "Meet Our Doctors", href: "/doctors" },
                { label: "Book Appointment", href: "/booking" },
                { label: "Patient Portal", href: "/portal" },
                { label: "About MediCare", href: "/about" },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base font-semibold">Departments</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/65">
              {["General Medicine", "Cardiology", "Pediatrics", "Dermatology", "Dental Care"].map(
                (s) => (
                  <li key={s}>
                    <Link to="/services" className="transition-colors hover:text-white">
                      {s}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold">Visit Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li className="flex gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                123 Adeola Odeku Street, Victoria Island, Lagos
              </li>
              <li className="flex gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
                +234 800 MEDI-CARE
              </li>
              <li className="flex gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                care@medicare-clinic.com
              </li>
              <li className="flex gap-2.5">
                <Clock size={16} className="mt-0.5 shrink-0 text-gold" />
                Mon – Sat: 7:00am – 9:00pm
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} MediCare Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}