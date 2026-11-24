function FormSelect({
  label,
  name,
  value,
  onChange,
  options,
  required = false
}) {
  return (
    <div className="row mb-3 align-items-center">

      <label
        htmlFor={name}
        className="col-md-3 col-form-label"
      >
        {label}
      </label>

      <div className="col-md-9">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="form-select"
        >
          <option value="">Sélectionner</option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}

        </select>
      </div>

    </div>
  );
}

export default FormSelect;