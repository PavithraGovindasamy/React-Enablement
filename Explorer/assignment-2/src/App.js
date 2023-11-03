
import './App.css';
import Explorer  from "./pages/ExplorerPage/ExplorerPage"
import Details from './pages/DetailsPage/DetailsPage';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
     <Route path="/" element={<Explorer/>}></Route>
      <Route path="/users" element={<Details/>}></Route> 
    </Routes>
  );
}

export default App;
