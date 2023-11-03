import Button from "../Button/Button";
import './Card.css'

export default function Card({place,city,shortDescription}){
return(
    <div  className="cards">
    <img src={"images/" +  city + ".png"} alt="places" />
      <p className="cards-heading">{place}</p>
      <h4 className="city-name">{city}</h4>
      <p className="description">{shortDescription}</p>
      <Button className="destination-button" label={"READ MORE"}></Button>
      <p></p>
    </div>);
}