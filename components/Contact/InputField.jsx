const InputField = ({ label, name, type, value, onChange }) => (
    <div className="mb-4">
        <label className="text-gray-500 dark:bg-gray-950 dark:text-slate-300 text-sm font-semibold" htmlFor={name}>
            {label}
        </label>
        <input
            className="bg-white dark:bg-gray-800 shadow-md text-gray-500 dark:text-gray-300 dark:border-blue-400"
            name={name}
            type={type}
            required
            value={value}
            onChange={onChange}
        />
    </div>
  );
  
  export default InputField;
  