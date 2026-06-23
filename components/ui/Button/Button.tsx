import { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import "./Button.css";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "text" | "solid";
  size?: "small" | "medium" | "large";
  icon?: ReactNode;
  className?: string;
  disabled?: boolean;
};

type ButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "medium",
  icon,
  className = "",
  type = "button",
  disabled = false,
  ...props
}: ButtonProps) => {
  const classNames = `btn btn-${variant} btn-${size} ${disabled ? "btn-disabled" : ""} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classNames} aria-disabled={disabled} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        <span>{children}</span>
        {icon && <span className="btn-icon">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      type={type as "button" | "submit" | "reset"}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      className={classNames}
      disabled={disabled}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <span>{children}</span>
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
};

export default Button;
