import './Button.css'
import PropTypes from "prop-types";


export default function Button({id, label,clicked }) {
    return (

        <button id={id} onClick={clicked} >
          {label}
        </button>
    );
  }
  
  Button.propTypes = {
    label: PropTypes.string.isRequired,
  };
  