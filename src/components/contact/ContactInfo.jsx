import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";

const INFO = [
  {
    icon: Phone,
    label: "Phone",
    value: "+234 800 MEDI-CARE",
    href: "tel:+2348001234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "care@medicare-clinic.com",
    href: "mailto:care@medicare-clinic.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Adeola Odeku Street, Victoria Island, Lagos",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Sat: 7:00am – 9:00pm",
    href: null,
  },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      {INFO.map(({ icon: Icon, label, value, href }) => {
        const content = (
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mint text-primary">
              <Icon size={19} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate">{label}</p>
              <p className="mt-0.5 text-sm font-medium text-charcoal">{value}</p>
            </div>
          </div>
        );

        return href ? (
          <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
            {content}
          </a>
        ) : (
          <div key={label}>{content}</div>
        );
      })}

      {/* Emergency callout */}
      <div className="flex items-start gap-3 rounded-2xl bg-coral/10 p-5">
        <AlertCircle size={20} className="mt-0.5 shrink-0 text-coral" />
        <div>
          <p className="text-sm font-semibold text-charcoal">Medical emergency?</p>
          <p className="mt-1 text-xs leading-relaxed text-slate">
            Call our 24/7 emergency line immediately — do not use this form for urgent care.
          </p>
        </div>
      </div>
    </div>
  );
}