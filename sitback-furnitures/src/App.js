import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from '../src/pages/Home/HomePage.js'
import ShoppingPage from './pages/Shopping/ShoppingPage';
import ConfirmationPage from './pages/ConfirmationPage/ConfirmationPage';
/**
 * Main class which is responsible for all the page redirections
 * @returns APP Component
 */
function App() {
  return (
    <Routes>
     <Route path="/" element={<HomePage/>}></Route>
     <Route path="/categories/:productName" element={<ShoppingPage/>}></Route>
     <Route path="/confirmOrder" element={<ConfirmationPage/>}></Route>
    </Routes>
  );
}

export default App;
