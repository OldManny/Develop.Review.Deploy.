const TextArea = ({ label, name, value, onChange }) => (
    <div className="mb-6">
        <label className="text-gray-500 text-sm font-semibold" htmlFor={name}>
            {label}
        </label>
        <textarea
            className="bg-white shadow-md text-gray-500"
            name={name}
            required
            value={value}
            onChange={onChange}
        />
    </div>
  );
  
  export default TextArea;
  