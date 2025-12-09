import "./Button.scss";

function Button({ children, type = "button", className = "" }) {
  return (
    <button type={type} className={`button ${className}`}>
      {children}
    </button>
  );
}
export default Button;
