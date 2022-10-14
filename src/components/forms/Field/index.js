const Field = ({
  form,
  label,
  name,
  type,
  placeholder,
  autoFocus,
  required,
  onChange,
  detail,
}) => {
  return (
    <div className="field">
      <label className="bold size-18" form={form} htmlFor={name}>
        {label}
      </label><br/>
      <span>{detail}</span>
      <input
      className="form-input"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
        onChange={onChange}
      />
    </div>
  );
};

export default Field;
