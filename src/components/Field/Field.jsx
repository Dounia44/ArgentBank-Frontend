import "./Field.scss";

function Field({ id, label, type = "text", value, ...props }) {
  return (
    <div className="field">
      <label htmlFor={id} className="field__label">
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value || ""}
        {...props}
        className="field__input"
      />
    </div>
  );
}
export default Field;
