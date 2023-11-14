import dropdown from '../../assests/images/dropdown.png'
import './Header.css';
import { useNavigate } from "react-router";

export default function Header(){
   
      const navigate=useNavigate();
    function handleHeaderClick(){
        navigate(`/`)    
    } 
    
    return(
        <>
        <div className="header-container">
            <p className='menu-heading' onClick={handleHeaderClick}>SITBACK</p>
            <ul className='menu-container'>
                <li>COUCHES</li>
                <li>CHAIRS</li>
                <li>DINING</li>
            </ul>
            <div className='user-details'>
                <p>Nijin Vinodan</p>
                <img src={dropdown} alt="dropdown"></img>
            </div>
        </div>
        </>
    );

}