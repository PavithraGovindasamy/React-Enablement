import './Button.css'
import PropTypes from "prop-types";


export default function Button({ label,clicked }) {
    return (
            /** button component which has feauture of button */

        <button onClick={clicked} >
          {label}
        </button>
    );
  }
  
  Button.propTypes = {
    label: PropTypes.string.isRequired,
    clicked: PropTypes.func.isRequired,
  };
  