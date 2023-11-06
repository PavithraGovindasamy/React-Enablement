
import './App.css';
import Explorer  from "./pages/Explorer/ExplorerPage"
import Details from './pages/DetailsPage/DetailsPage';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
     <Route path="/" element={<Explorer/>}></Route>
      <Route path="/details/:place" element={<Details/>}></Route> 
    </Routes>
  );
}

export default App;
