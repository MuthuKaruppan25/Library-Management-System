const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      <select
        value={value}
        onChange={onChange}
        style={{
          width: "285%",
          height: "50px",
          marginLeft: "5px",
          borderRadius: "0%",
          border: "5px",
          borderColor: "#666666",
        }}
      >
        {options.map((option) => (
          <option
            value={option.value}
            style={{ fontFamily: "sans-serif", paddingLeft: "5px" }}
          >
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Dropdown;
