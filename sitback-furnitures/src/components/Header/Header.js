import dropdown from '../../assests/images/dropdown.png'
import './Header.css';
export default function HomePage(){
    return(
        <>
        <div className="header-container">
            <p className='menu-heading'>SITBACK</p>
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