import Button from "../Button/Button";
import "./Card.css";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";


export default function Card({ place, city, shortDescription }) {
  const navigate=useNavigate()
  const placeDescription = shortDescription.split("\\n")
        .map((content, idx) => {
            return <p key={idx}>{content}</p>
        });
  console.log(placeDescription);
  return (
    <div className="cards">
      <img src={`/images/${city}.png`} alt="places" />
      <p className="cards-heading">{place}</p>
      <h4 className="city-name">{city}</h4>
      <p className="description">{shortDescription}</p>
      <Button className="destination-button" label={"READ MORE"} clicked={() => navigate(`/details/${city}`)}></Button>
      <p></p>
    </div>
  );
}

Card.propTypes = {
  place: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
};