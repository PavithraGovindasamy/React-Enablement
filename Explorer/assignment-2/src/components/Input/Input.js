import React from 'react';
import './Input.css';

export default function Input({ type, name, value, onChange, error }) {

  return (
    <div className="form-group">
      <input
        type={type}
        name={name}
        className={'input-field'}
        value={value}
        onChange={onChange}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
}
