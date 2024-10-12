import dropdown from "../../assests/images/dropdown.png";
import "./Header.css";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
/**
 *  Class which returns the header content
 * @returns Header component
 */
export default function Header() {
  const navigate = useNavigate();
  function handleHeaderClick() {
    navigate(`/`);
  }

  return (
    <>
      <div className="header-container">
        <p className="menu-heading" onClick={handleHeaderClick}>
          SITBACK
        </p>
        <ul className="menu-container">
          <NavLink
            to="/categories/couches"
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
          >
            COUCHES
          </NavLink>
          <NavLink
            to="/categories/chairs"
            className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
          >
            CHAIRS
          </NavLink>
          <NavLink
            to="/categories/dining"
            className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
          >
            DINING
          </NavLink>
        </ul>
        <div className="user-details">
          <p>Nijin Vinodan</p>
          <img src={dropdown} alt="dropdown"></img>
        </div>
      </div>
    </>
  );
}
