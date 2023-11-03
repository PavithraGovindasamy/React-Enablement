import Header from "../../components/Header/Header";
import Masangudi from '../../assets/images/masangudi.png'
import './DetailsPage.css'

export default function DetailsPage(){
    return(
        <>
        <Header />
        <div className="details-container">
            <div className="heading-container">
            <p className="place-heading">Masungudi</p>
            <p className="place-description">NEVER ENDING PADDING FIELDS And NARROW ROADS</p>
            </div>
            
            <div className="place-container">
            <img src={Masangudi} alt="places" />
            </div>
        </div>
        <div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        </div>
        </>
    );
}