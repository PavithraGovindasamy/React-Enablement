import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

export default function Button({ id, label, clicked, onSelected, disabled }) {
  return (
    <button
      id={id}
      onClick={clicked}
      className={`button ${onSelected ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
  onSelected: PropTypes.bool,
  disabled: PropTypes.bool, 
};
