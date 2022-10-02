const TextArea = ({form, name, label, rows, placeholder, autoFocus, required }) => {
  return (
    <div className="field">
      <label className="bold size-18" form={form} htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        className="form-input"
        rows={rows}
        placeholder={placeholder ? placeholder : ""}
        autoFocus={autoFocus}
        required={required}
      ></textarea>
    </div>
  );
};

export default TextArea;