import Header from "../../components/Header/Header";
import "./DetailsPage.css";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router";
import Card from "../../components/Card/Card";
import "../Explorer/ExplorerPage.css";
import { useNavigate } from "react-router";
import { FadeLoader } from "react-spinners";
import ExplorerService from "../../services/ExplorerService";


export default function DetailsPage() {
  const [weather, setWeather] = useState({});
  const { place } = useParams();
  const [placeData, setData] = useState([]);
  const [relatedPlace, setRelatedPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await ExplorerService.getWeather(place);
        setWeather(weatherData);

        const placeData = await ExplorerService.getPlaceData(place);
        setData(placeData);
      
        // Fetch related places
        if (placeData.relatedPlaces) {
          const relatedPlacesData = await ExplorerService.getRelatedPlaces(placeData.relatedPlaces);
          setRelatedPlaces(relatedPlacesData);
          setIsLoading(false);
        }
      } catch (error) {
        navigate("/home");
      }
    };

    fetchData();
  }, [place, navigate]);


  // To split the para content
  const placeDescription = placeData.fullDescription
    ?.split("\\n")
    .map((content, idx) => {
      return (
        <div key={`${content}-${idx}`}>
          <p className="para-content">{content}</p>
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
