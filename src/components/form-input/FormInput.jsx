import "./formInput.css";

function FormInput(props) {
  return (
    <div className="group">
      <label className="form-input-label">{props.label}</label>
      <input
        className="form-input"
        onChange={props.handleChange}
        type={props.type}
        name={props.name}
        value={props.value}
        required
      />
    </div>
  );
}

export default FormInput;
