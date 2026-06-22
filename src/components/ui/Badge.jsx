const VARIANTS = {
  mint: "bg-mint text-primary",
  coral: "bg-coral/10 text-coral",
  gold: "bg-gold/15 text-gold",
  white: "bg-white text-primary",
};

export default function Badge({ children, variant = "mint", icon: Icon, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${VARIANTS[variant]} ${className}`}
    >
      {Icon && <Icon size={12} />}
      {children}
    </span>
  );
}