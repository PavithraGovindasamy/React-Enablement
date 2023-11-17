import React, { useState } from 'react';
import './Select.css';

export default function Select({ options, onChange, className, isAbsolute }) {
  const [selectedOption, setSelectedOption] = useState();

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);

    if (onChange) {
      onChange(selectedValue);
    }
  };

  const selectClass = isAbsolute ? 'absoluteSelect' : className;

  return (
    <select className={`selectComponent ${selectClass}`} label={"Choose"} value={selectedOption} onChange={handleSelectChange}>
      <option value="">Choose</option>
      {options.map((item, index) => (
        <option key={`${index}`} value={item.city}>
          {item.city}
        </option>
      ))}
    </select>
  );
}
