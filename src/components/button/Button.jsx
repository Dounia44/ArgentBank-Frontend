import "./Button.scss";

function Button({ children, type = "button", className = "", ...props }) {
  return (
    <button type={type} className={`button ${className}`} {...props}>
      {children}
    </button>
  );
}
export default Button;
