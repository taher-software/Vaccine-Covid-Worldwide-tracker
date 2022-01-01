import React from "react";
import HeaderPage from "../Navbar/Nav";
import WORLDMAP from '../../assets/Images/world-map.jpg';
import './home.css';
const Home = () => {
  return (
   <>
    <HeaderPage page={'home'} />
    <div className="general-inf">
      <div className="worldwide-map">
        <img src={WORLDMAP} alt="worldwide-map" />
      </div>
      <div className="worldwide-vacc">
        <div className="display-text">
          <h1>WORLDWIDE</h1>
          <span>52.5% vaccinated</span>
        </div>
      </div>
    </div>
   </>
  )

}

export default Home;