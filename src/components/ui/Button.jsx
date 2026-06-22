import { Link } from "react-router-dom";

const VARIANTS = {
  primary: "bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md",
  coral: "bg-coral text-white hover:bg-coral-dark shadow-sm hover:shadow-md",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  ghost: "text-primary hover:bg-mint",
  white: "bg-white text-primary hover:bg-mint shadow-sm",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className = "",
  type = "button",
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={size === "lg" ? 18 : 16} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={size === "lg" ? 18 : 16} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}