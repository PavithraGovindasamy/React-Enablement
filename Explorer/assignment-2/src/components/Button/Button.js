import "./Button.css";
import PropTypes from "prop-types";

export default function Button({ label, clicked, size }) {
  const buttonClassName = size === "big" ? "big-button" : "small-button";

  return (
    /** button component */
    <button onClick={clicked} className={buttonClassName}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
};
