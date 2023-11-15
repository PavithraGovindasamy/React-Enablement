

const api = {
    key: "c43e8df78d7b635d66c3c8c48a047e0d",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  
  
  const ExplorerService = {

    getAllPlaces: async()=>{
        try{
         const response=await fetch(`https://nijin-server.vercel.app/api/explorer`);
         return response.json();
        }
        catch (error) {
            throw new Error(`Error fetching all data: ${error.message}`);
          }
    },
    getWeather: async (place) => {
      try {
        const response = await fetch(`${api.base}weather?q=${place}&units=metric&APPID=${api.key}`);
        return response.json();
      } catch (error) {
        throw new Error(`Error fetching weather data: ${error.message}`);
      }
    },
  
    getPlaceData: async (place) => {
      try {
        const response = await fetch(`https://nijin-server.vercel.app/api/explorer/places/${place}`);
        return response.json();
      } catch (error) {
        throw new Error(`Error fetching place data: ${error.message}`);
      }
    },
  
    getRelatedPlaces: async (relatedPlaces) => {
      try {
        const fetchRequests = relatedPlaces.map(
          (relatedPlaceName) =>
            fetch(`https://nijin-server.vercel.app/api/explorer/places/${relatedPlaceName}`).then((res) => res.json())
        );
  
        return Promise.all(fetchRequests);
      } catch (error) {
        throw new Error(`Error fetching related places: ${error.message}`);
      }
    },
  };
  
  export default ExplorerService;
  