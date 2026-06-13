import "./Button.css";

/**
 * Reusable Button Component
 *
 * Kya: Ek flexible button jo `<a>` ya `<button>` dono ban sakta hai.
 * Kyun: Poore app mein consistent button styling ensure karne ke liye.
 * Variants: primary, gold, outline
 * Sizes: small, medium, large
 */
const Button = ({
  children,
  href,
  onClick,
  variant = "primary", // primary | gold | outline
  size = "medium",     // small | medium | large
  icon,
  className = "",
  type = "button",
  disabled = false,
  ...props
}) => {
  const classNames = `btn btn-${variant} btn-${size} ${disabled ? "btn-disabled" : ""} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classNames} aria-disabled={disabled} {...props}>
        <span>{children}</span>
        {icon && <span className="btn-icon">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames}
      disabled={disabled}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
};

export default Button;
