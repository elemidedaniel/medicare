import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Stethoscope, UserCircle } from "lucide-react";

const NAV_LINKS = [
  { label: "Home",        href: "/"         },
  { label: "Services",    href: "/services"  },
  { label: "Our Doctors", href: "/doctors"   },
  { label: "About",       href: "/about"     },
  { label: "Contact",     href: "/contact"   },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-warm/95 shadow-sm backdrop-blur-md" : "bg-warm"
      }`}
    >
      {/* Top utility strip — desktop only */}
      <div className="hidden border-b border-border bg-primary text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
          <p className="flex items-center gap-2">
            <Phone size={13} strokeWidth={2.5} />
            <span>
              24/7 Patient Line:{" "}
              <strong className="font-semibold">+234 800 MEDI-CARE</strong>
            </span>
          </p>
          {/* Portal shortcut in the utility strip */}
          <Link
            to="/portal"
            className="flex items-center gap-1.5 text-white/80 transition-colors hover:text-white"
          >
            <UserCircle size={14} />
            Patient Portal
          </Link>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white transition-transform group-hover:scale-105">
            <Stethoscope size={19} strokeWidth={2.2} />
          </span>
          <span className="font-display text-2xl font-semibold tracking-tight text-charcoal">
            Medi<span className="text-primary">Care</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`text-[15px] font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href ? "text-primary" : "text-slate"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right-side actions */}
        <div className="flex items-center gap-2.5">
          {/* Patient Portal — ghost button, desktop only */}
          <Link
            to="/portal"
            className={`hidden items-center gap-1.5 rounded-full border border-border px-4 py-2.5 text-sm font-semibold transition-all hover:border-primary hover:text-primary lg:flex ${
              location.pathname === "/portal"
                ? "border-primary text-primary bg-mint"
                : "text-slate"
            }`}
          >
            <UserCircle size={15} />
            Patient Portal
          </Link>

          {/* Book Appointment — coral CTA */}
          <Link
            to="/booking"
            className="hidden rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-coral-dark hover:shadow-md sm:inline-block"
          >
            Book Appointment
          </Link>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-charcoal lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-warm px-6 py-5 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                    location.pathname === link.href
                      ? "bg-mint text-primary"
                      : "text-charcoal hover:bg-mint"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Patient Portal — mobile menu entry */}
            <li>
              <Link
                to="/portal"
                className={`flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                  location.pathname === "/portal"
                    ? "bg-mint text-primary"
                    : "text-charcoal hover:bg-mint"
                }`}
              >
                <UserCircle size={18} />
                Patient Portal
              </Link>
            </li>
          </ul>

          <Link
            to="/booking"
            className="mt-4 block rounded-full bg-coral px-5 py-3 text-center text-sm font-semibold text-white shadow-sm"
          >
            Book Appointment
          </Link>
          <p className="mt-4 flex items-center gap-2 px-3 text-sm text-slate">
            <Phone size={14} />
            +234 800 MEDI-CARE
          </p>
        </div>
      )}
    </header>
  );
}