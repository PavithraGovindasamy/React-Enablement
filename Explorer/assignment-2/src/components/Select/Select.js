import React, { useState } from 'react';
import './Select.css'
export default function Select({ options, onChange ,className,id}) {
  const [selectedOption, setSelectedOption] = useState();

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);

    if (onChange) {
      onChange(selectedValue);
    }

  };

  return (
    <select id={id} className={className} label={"Choose"} value={selectedOption} onChange={handleSelectChange}>
      <option value="">Choose</option>
      {options.map((item, index) => (
        <option key={`${index}`} value={item.city}>
          {item.city}
        </option>
      ))}
    </select>
  );
}

