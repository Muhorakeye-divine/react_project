
function FormInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  required = false,
  max,
  pattern,
  title
}) {
  return (
    <>
      <style>{`
        .form-control,
        .form-select {
          min-height: 42px;
          border-radius: 5px;
        }

        .form-control:focus,
        .form-select:focus {
        }

        .col-form-label {
          font-weight: 500;
          color:gray;
        }

        .card {
          border: none;
          border-radius: 8px;
        }

        .card-header {
          padding: 16px 20px;
        }

        .card-body {
          padding: 25px;
        }

        @media (max-width: 768px) {
          .col-form-label {
            padding-bottom: 5px;
          }

          .card-body {
            padding: 15px;
          }
        }
      `}</style>

      <div className="row mb-3 align-items-center">

        <label
          htmlFor={name}
          className="col-md-3 col-form-label"
        >
          {label}
        </label>

        <div className="col-md-9">
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="form-control"
            max={max}
            pattern={pattern}
            title={title}
          />
        </div>

      </div>
    </>
  );
}

export default FormInput;
