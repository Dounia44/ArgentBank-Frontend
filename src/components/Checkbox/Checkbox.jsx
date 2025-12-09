import "./Checkbox.scss";

function Checkbox({ id, label }) {
  return (
    <div className="checkbox">
      <input type="checkbox" id={id} className="checkbox__input" />
      <label htmlFor={id} className="checkbox__label">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
