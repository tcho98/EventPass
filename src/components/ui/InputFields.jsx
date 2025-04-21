const InputField = ({
  type = "text",
  label,
  name,
  value,
  onChange,
  required = false,
  placeholder = "",
  ...props
}) => {
  return (
    <div className="card p-4 w-full ">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="border w-full p-3 w-sm rounded-md"
        {...props}
      />
    </div>
  );
};

export default InputField;
