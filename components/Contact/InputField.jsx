const InputField = ({ label, name, type, value, onChange }) => (
    <div className="mb-4">
        <label className="text-gray-500 text-sm font-semibold" htmlFor={name}>
            {label}
        </label>
        <input
            className="bg-white shadow-md text-gray-500"
            name={name}
            type={type}
            required
            value={value}
            onChange={onChange}
        />
    </div>
  );
  
  export default InputField;
  