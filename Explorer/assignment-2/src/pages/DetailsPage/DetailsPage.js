import Header from "../../components/Header/Header";
import Masangudi from "../../assets/images/masangudi.png";
import "./DetailsPage.css";
import { useState, useEffect, useRef } from "react";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router";
import Card from "../../components/Card/Card";
import '../Explorer/ExplorerPage.css'
import { FadeLoader } from "react-spinners";
import PropTypes from "prop-types";

const api = {
  key: "c43e8df78d7b635d66c3c8c48a047e0d",
  base: "https://api.openweathermap.org/data/2.5/",
};
export default function DetailsPage() {
  const [weather, setWeather] = useState([]);
  const { place } = useParams();
  const [data, setData] = useState([]);
  const [relatedPlace, setRelatedPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch(`${api.base}weather?q=${place}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });

    fetch(`https://nijin-server.vercel.app/api/explorer/places/${place}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);

      })
      
  },[place]);
  
  useEffect(() => {
    let isMounted = true; 
    if (data.relatedPlaces) {
      const fetchRequests = data.relatedPlaces.map((relatedPlaceName) =>
        fetch(`https://nijin-server.vercel.app/api/explorer/places/${relatedPlaceName}`)
          .then((res) => res.json())
      );
  
      Promise.all(fetchRequests)
        .then((relatedPlacesData) => {
          if (isMounted) {
            setRelatedPlaces(relatedPlacesData);
          }
        })
    }
        return () => {
      isMounted = false;
    };
  }, [data.relatedPlaces]);
  

  return (
    <>
      <Header />
      {isLoading ? (<FadeLoader
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />)
      :( <>
      <div className="details-container">
      <div className="heading-container">
        <p className="place-heading">{place}</p>
        <p className="place-description">{data.place}</p>
        {weather && weather.main && (
          <p className="temperature">{weather.main.temp}°C</p>
        )}
      </div>
      <div className="place-container">
        <img src={Masangudi} alt="places" />
      </div>
    </div>
    <div>
      <p>{data.fullDescription}</p>
    </div>
    <div className="destination-section">
      <div className="similar-destination-content">
      <p className="similar-destination-heading">Similar Destinations</p>
      <p className="similar-destination-message">Because you liked {place}</p>
      </div>
      <div className="container">
        {data.relatedPlaces &&
          Object.values(relatedPlace).map((item, index) => {
            return (
              <>
                <Card {...item} ></Card>
              </>
            );
          })}
      </div>
    </div>
    </>)}
     
      <Footer />
    </>
  );
}

DetailsPage.propTypes = {
  place: PropTypes.string.isRequired,
};
