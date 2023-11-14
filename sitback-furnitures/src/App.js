import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from '../src/pages/Home/HomePage.js'
import ShoppingPage from './pages/Shopping/ShoppingPage';
function App() {
  return (
    <Routes>
     <Route path="/" element={<HomePage/>}></Route>
     <Route path="/categories/:productName" element={<ShoppingPage/>}></Route>
    </Routes>
  );
}

export default App;
