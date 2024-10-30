import React from "react";
import Logo from "../../assets/icons/Immo-Logo.svg";
import Tools from "../../assets/icons/tools.svg";
import ChevronDown from "../../assets/icons/chevron-down.svg";
import City from "../../assets/icons/city.svg";
import Clipboard from "../../assets/icons/clipboard.svg";
import Compass from "../../assets/icons/compass.svg";
import Eco from "../../assets/icons/eco.svg";
import Elevator from "../../assets/icons/elevator.svg";
import Golf from "../../assets/icons/golf.svg";
import Avatr from "../../assets/images/avatar.png";
import StarBg from "../../assets/icons/star-bg.svg";
import HalfBg from "../../assets/icons/half-bg.svg";
import Star from "../../assets/icons/star.svg";
import Google from "../../assets/icons/google.svg";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="immo-trust">
      <div className="top-btn">
        <img src={Tools} alt="Tools" className="tools-icon" />
        <button className="btn">NACHTMODUS</button>
      </div>
      <div className="immo-trust-header">
        <div className="immo-trust-logo">
          <img src={Logo} alt="ImmoTrust Logo" />
        </div>
      </div>
      <ul className="immo-trust-menu">
        <li>
          <img src={City} alt="city" />
          <div>
            <p>Immobilienlexikon</p>
            <p>Immobilienwissen für alle Fälle.</p>
          </div>
          <button className="btn-sm">KI</button>
        </li>

        <li>
          <img src={Elevator} alt="elevator" />
          <div>
            <p>Preisschätzung</p>
            <p>Den Wert Ihres Hauses schätzen lassen.</p>
          </div>
          <button className="btn-sm">Link</button>
        </li>

        <li className="bg-dark">
          <img src={Clipboard} alt="clipboard" />
          <div>
            <p>Checklisten</p>
            <p>Praktische Checklisten für jeden Schritt.</p>
          </div>
          <div className="btn-pdf">
            PDF
            <img src={ChevronDown} alt="ChevronDown" />
          </div>
        </li>

        <li>
          <img src={Eco} alt="eco" />
          <div>
            <p>Ratgeber</p>
            <p>Immobilien-Expertenrat für Eigentümer.</p>
          </div>
          <div className="btn-pdf">
            PDF
            <img src={ChevronDown} alt="ChevronDown" />
          </div>
        </li>

        <li>
          <img src={Compass} alt="compass" />
          <div>
            <p>Mandatsnavigator</p>
            <p>Verständlich zum Verkaufsabschluss.</p>
          </div>
          <button className="btn-sm">KI</button>
        </li>

        <li>
          <img src={Golf} alt="golf" />
          <div>
            <p>Wohntraumfinder</p>
            <p>Zum Traumheim mit KI-Unterstützung.</p>
          </div>
          <button className="btn-sm">KI</button>
        </li>
      </ul>

      <div className="immo-trust-profile">
        <div className="profile-picture-container">
          <img src={Avatr} alt="Carlos Kuk" className="profile-picture" />
        </div>
        <div className="profile-info">
          <h3>Immotrust AG</h3>
          <p>Vertrauensvolle Immobilienberatung seit 2008.</p>
          <span>Carlos Kuk – Eigentümer</span>
        </div>
      </div>
      <div className="immo-trust-rating">
        <div className="rating-sec">
          <div className="google-rating">
            <img src={Google} alt="google" className="google-logo" />
            <span className="rating-text">Bewertungen</span>
          </div>
          <div className="immo-trust-stars">
            <span className="star-container">
              <img src={StarBg} alt="StarBg" className="star-bg" />
              <img src={Star} alt="Star" className="star-icon" />
            </span>
            <span className="star-container">
              <img src={StarBg} alt="StarBg" className="star-bg" />
              <img src={Star} alt="Star" className="star-icon" />
            </span>
            <span className="star-container">
              <img src={StarBg} alt="StarBg" className="star-bg" />
              <img src={Star} alt="Star" className="star-icon" />
            </span>
            <span className="star-container">
              <img src={StarBg} alt="StarBg" className="star-bg" />
              <img src={Star} alt="Star" className="star-icon" />
            </span>
            <span className="star-container">
              <img src={HalfBg} alt="StarBg" className="star-bg" />
              <img src={Star} alt="Star" className="star-icon" />
            </span>
          </div>
        </div>
        <span className="rating-info">
          4.6 von 5 basierend auf 245 Bewertungen
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
