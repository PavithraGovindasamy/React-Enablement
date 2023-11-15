import React, { useState } from "react";
import "./Footer.css";
import dropDown from "../../assets/images/dropdown.png";
import "../../pages/Explorer/ExplorerPage.css";
import Button from "../Button/Button";
import Select from "../Select/Select";
import Input from "../Input/Input";


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

  const handleSelectHomeTownChange = (selectedValue) => {
    setFormHometown(selectedValue);
  };

  const handleSelectDestinationChange = (selectedValue) => {
    setFormDestination(selectedValue);
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

  const homeTownData = [
    { city: "vellore", label: "Vellore" },
    { city: "banglore", label: "Banglore" },
  ];

  const destinationOptionsData = [
    { city: "tamilnadu", label: "Tamil Nadu" },
    { city: "karnataka", label: "Karnataka" },
  ];

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
              <Input
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleInputChange}
                error={formErrors.fname}
              />
            </div>
            <div className="form-group">
              <label className="label_heading">Your Home Town</label>
              <div className="input-container">
                <Select
                  className="input-field"
                  name="hometown"
                  value={formData.hometown}
                  options={homeTownData}
                  onChange={handleSelectHomeTownChange}
                />

                <img className="icon-form" src={dropDown} alt="Icon" />
              </div>
            </div>

            <div className="form-group">
              <label className="label_heading">
                Where would you like to go?
              </label>
              <div className="input-container">
                <Select
                  className="input-field"
                  name="destination"
                  value={formData.destination}
                  options={destinationOptionsData}
                  onChange={handleSelectDestinationChange}
                />
                <img className="icon-form" src={dropDown} alt="Icon" />
              </div>
            </div>

            <div className="form-group">
              <label className="label_heading">Contact Number</label>
              <Input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                error={formErrors.number}
              />
            </div>
            <Button type="submit" label={"SUBMIT INTEREST"} size="big"></Button>
          </div>
          <div className="hidden">
            Thank you <span>{formName}</span> for expressing your interest in
            traveling with us. Our sales team will get back with the best
            packages from <span>{hometown}</span> to <span>{destination}</span>
          </div>
        </form>
      </div>
    </>
  );
}
