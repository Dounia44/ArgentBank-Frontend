import "./Checkbox.scss";

function Checkbox({ id, label, checked, onChange }) {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={id}
        className="checkbox__input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id} className="checkbox__label">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
