import './Button.css'
import PropTypes from "prop-types";


export default function Button({id,label,clicked,onSelected}) {
    return (

        <button id={id} onClick={clicked} className={onSelected ? "active" : undefined} >
          {label}
        </button>
    );
  }
  
  Button.propTypes = {
    label: PropTypes.string.isRequired,
  };
  