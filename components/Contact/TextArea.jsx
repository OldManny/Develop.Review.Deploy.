const TextArea = ({ label, name, value, onChange }) => (
    <div className="mb-6">
        <label className="text-gray-500 dark:bg-gray-950 dark:text-slate-300 text-sm font-semibold" htmlFor={name}>
            {label}
        </label>
        <textarea
            className="bg-white shadow-md dark:bg-gray-800 text-gray-500 dark:text-gray-300 dark:border-transparent"
            name={name}
            required
            value={value}
            onChange={onChange}
        />
    </div>
  );
  
  export default TextArea;
  