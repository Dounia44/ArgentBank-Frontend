import "./Input.scss";

function Input({ id, label, type = "text" }) {
  return (
    <div className="input">
      <label htmlFor={id} className="input__label">
        {label}
      </label>

      <input type={type} id={id} className="input__field" />
    </div>
  );
}
export default Input;
