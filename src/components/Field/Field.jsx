import "./Field.scss";

function Field({ id, label, type = "text", ...props }) {
  return (
    <div className="field">
      <label htmlFor={id} className="field__label">
        {label}
      </label>

      <input type={type} id={id} {...props} className="field__input" />
    </div>
  );
}
export default Field;
