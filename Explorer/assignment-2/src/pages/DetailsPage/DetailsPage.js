import Header from "../../components/Header/Header";
import "./DetailsPage.css";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router";
import Card from "../../components/Card/Card";
import "../Explorer/ExplorerPage.css";
import { useNavigate } from "react-router";
import { FadeLoader } from "react-spinners";

const api = {
  key: "c43e8df78d7b635d66c3c8c48a047e0d",
  base: "https://api.openweathermap.org/data/2.5/",
};

export default function DetailsPage() {
  const [weather, setWeather] = useState({});
  const { place } = useParams();
  const [placeData, setData] = useState([]);
  const [relatedPlace, setRelatedPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // To fetch details of selected place
  useEffect(() => {
    fetch(`${api.base}weather?q=${place}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      })
      .catch((error) => {
        navigate("/home");
      });
    fetch(`https://nijin-server.vercel.app/api/explorer/places/${place}`)
      .then((res) => res.json())
      .then((placeData) => {
        setData(placeData);

        setIsLoading(false);
      })
      .catch((error) => {
        navigate("/home");
      });
  }, [place, navigate]);

  // * to fetch related places
  useEffect(() => {
    let isMounted = true;
    if (placeData.relatedPlaces) {
      const fetchRequests = placeData.relatedPlaces.map((relatedPlaceName) =>
        fetch(
          `https://nijin-server.vercel.app/api/explorer/places/${relatedPlaceName}`
        ).then((res) => res.json())
      );

      Promise.all(fetchRequests).then((relatedPlacesData) => {
        if (isMounted) {
          setRelatedPlaces(relatedPlacesData);
        }
      });
    }
  }, [placeData.relatedPlaces]);

  // To split the para content
  const placeDescription = placeData.fullDescription
  ?.split("\\n")
  .map((content, idx) => {

    return (
      <div key={`${content}-${idx}`}>
        <p className="para-content">
          {content}
        </p>
        <br></br>
        <br></br>
      </div>
    );
  });


  return (
    <>
      <Header />
      {isLoading ? (
        <div className="loader-container">
          <FadeLoader
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <p>Loading</p>
        </div>
      ) : (
        <>
          <div className="details-container">
            <div className="heading-container">
              <p className="place-heading">{placeData.city}</p>
              <p className="place-description">{placeData.place}</p>
              {weather && weather.main && (
                <p className="temperature">{weather.main.temp}°C</p>
              )}
            </div>
            <div className="place-container">
              <img src={`/images/${placeData.city}.png`} alt="places" />
            </div>
          </div>
          <div className="paragraph-content">{placeDescription}</div>
          <div className="destination-section">
            <div className="similar-destination-content">
              <p className="similar-destination-heading">
                Similar Destinations
              </p>
              <p className="similar-destination-message">
                Because you liked {place}
              </p>
            </div>
            <div className="container">
              {relatedPlace.map((item) => (
                <Card key={`${item.city}-${item.id}`} {...item}></Card>
              ))}
            </div>
          </div>
        </>
      )}

      <Footer />
    </>
  );
}
