import { useState } from "react";

const Select = ({
  label,
  form,
  name,
  value,
  onChange,
  required,
  autoFocus,
  options,
}) => {
  const [currentSubject, setCurrentSubject] = useState(value);

  const handleSelect = (e) => {
    onChange ? onChange(e) : 0
    
    setCurrentSubject(e.target.value)
  }

  return (
    <>
      <label form={form} htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={currentSubject}
        className="form-input"
        form={form}
        onChange={handleSelect}
        required={required}
        autoFocus={autoFocus}
      >
        {options.map(({ value, id }, i) => (
          <option key={i} value={id}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
