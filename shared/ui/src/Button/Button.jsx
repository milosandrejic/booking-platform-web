import "./Button.scss";

const Button = ({ 
  children, 
  variant = "filled", // Material Design 3 default
  size = "medium", 
  disabled = false,
  onClick,
  type = "button",
  className = "",
  style = {},
  fullWidth = false,
  startIcon,
  endIcon,
  ...props 
}) => {
  const classes = [
    "button",
    `button--variant-${variant}`,
    `button--size-${size}`,
    fullWidth && "button--fullWidth",
    className
  ].filter(Boolean).join(" ");

  return (
    <button
      className={classes}
      style={style}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      {startIcon && <span className="button__startIcon">{startIcon}</span>}
      {children}
      {endIcon && <span className="button__endIcon">{endIcon}</span>}
    </button>
  );
};

export default Button;
