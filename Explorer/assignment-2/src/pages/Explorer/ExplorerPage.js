import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import DestinationSection from "../../components/DestinationSection/DestinationSection";
import cover from "../../assets/images/banner.webp";
import "./ExplorerPage.css";
import { useNavigate } from "react-router";
import Footer from "../../components/Footer/Footer";
import dropDown from "../../assets/images/images.png";
import ExplorerService from "../../services/ExplorerService";
import Select from "../../components/Select/Select";

export default function ExplorerPage() {
  const [placeData, setData] = useState([]);
  const [option, setOptions] = useState("");
  const navigate = useNavigate();
  // To fetch all the data
  useEffect(() => {
    const fetchData = async () => {
      const placeData = await ExplorerService.getAllPlaces();
      setData(placeData);
    };
    fetchData();
  }, []);

  //  To navigate to another page on click
  const handleExploreClick = () => {
    if (option) {
      navigate(`/details/${option}`);
    }
  };

  const handleDropdown = (selectedValue) => {
    setOptions(selectedValue);
  };

  return (
    <>
      <Header />
      {/* Promo and search section */}
      <div className="promo-section">
        <div className="explorer-section">
          <p className="explorer-heading">WELCOME TO EXPLORER</p>
          <p className="explorer-description">
            Your Adventure Travel Expert in the <span>SOUTH</span>
          </p>
          <div className="input-container">
            <Select
             className="input-field"
              options={placeData}
              onChange={handleDropdown}
              isAbsolute={true}
            />

            <img className="icon" src={dropDown} alt="Icon" />
          </div>

          <Button
            className="explorer-button"
            label={"EXPLORE"}
            clicked={handleExploreClick}
          ></Button>
        </div>
        <div className="explorer-image">
          <img src={cover} alt="coverImage" />
        </div>
      </div>
      {/* destination  section */}
       <DestinationSection
        title="Destinations"
        content="Just for you. Because you and your bike are special to us!"
        data={placeData}
      />
      {/* form-section */}
      <Footer></Footer>
      <p>{option}</p>
    </>
  );
}
