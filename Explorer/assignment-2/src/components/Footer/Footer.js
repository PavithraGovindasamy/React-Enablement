import React, { useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [formName, setFormName] = useState("");
  const [hometown, setFormHometown] = useState("");
  const [destination, setFormDestination] = useState("");

  const [formData, setFormData] = useState({
    fname: "",
    hometown: "",
    destination: "",
    number: "",
  });

  const [formErrors, setFormErrors] = useState({
    fname: "",
    number: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      document.getElementsByClassName("hidden")[0].style.display = "block";
      setFormName(formData.fname);
      setFormHometown(formData.hometown);
      setFormDestination(formData.destination);
      setFormData({
        fname: "",
        hometown: "",
        destination: "",
        number: "",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (formData.fname.trim() === "") {
      errors.fname = "Name is required";
      valid = false;
    } else if (!/^[A-Za-z\s]+$/.test(formData.fname)) {
      errors.fname = "Name should contain only letters";
      valid = false;
    }

    if (formData.number.trim() === "") {
      errors.number = "Contact Number is required";
      valid = false;
    } else if (!/^\d+$/.test(formData.number)) {
      errors.number = "Contact Number should contain only numbers";
      valid = false;
    }

    setFormErrors(errors);

    return valid;
  };

  return (
    <>
      <div className="footer">
        <div className="forms-group">
          <h1>Contact Us</h1>
          <p>Our Sales Team will reach out to you ASAP!</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="forms">
            <div className="form-group">
              <label className="label_heading">Name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                size="40"
                className="input-field"
                value={formData.fname}
                onChange={handleInputChange}
              />
              {formErrors.fname && (
                <div className="error">{formErrors.fname}</div>
              )}
            </div>
            <div className="form-group">
              <label className="label_heading">Your Home Town</label>
              <select
                id="hometown"
                name="hometown"
                className="input-field"
                value={formData.hometown}
                onChange={handleInputChange}
              >
                <option value="">Choose</option>
                <option value="india">India </option>
                <option value="usa">USA</option>
              </select>
            </div>

            <div className="form-group">
              <label className="label_heading">
                Where would you like to go?
              </label>
              <select
                id="destination"
                name="destination"
                className="input-field"
                value={formData.destination}
                onChange={handleInputChange}
              >
                <option value="">Choose</option>
                <option value="TN">Tamil Nadu</option>
                <option value="KN">Karnataka</option>
              </select>
            </div>

            <div className="form-group">
              <label className="label_heading">Contact Number</label>
              <input
                id="number"
                name="number"
                size="40"
                className="input-field"
                value={formData.number}
                onChange={handleInputChange}
              />
              {formErrors.number && (
                <div className="error">{formErrors.number}</div>
              )}
            </div>
            <button type="submit" className="button_form">
              SUBMIT INTEREST
            </button>

            <div className="hidden">
              Thank you <span>{formName}</span> for expressing your interest in traveling
              with us. Our sales team will get back with the best packages from{" "}
              <span>{hometown}</span> to <span>{destination}</span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
