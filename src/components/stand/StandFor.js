import React from 'react'
import '../stand/stand.css';
import Stand1 from "../../images/stand1.png";
import Stand2 from "../../images/stand2.png";
import Stand3 from "../../images/stand3.png";
import Stand4 from "../../images/stand4.png";
import Stand5 from "../../images/stand5.png";

const StandFor = () => {
  return (
    <section className="stand-section">
      <div className="stand-container">
        <div className="stand-text">
          <h2>What does Zeal stand for</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod
            tempor incididunt ut labore et.
          </p>
        </div>
        <div className="standIcons-container">
          <div className="stand-icons">
            <img src={Stand1} alt="" />
            <h5>Ethics</h5>
          </div>
          <div className="stand-icons">
            <img src={Stand2} alt="" />
            <h5>Innovation</h5>
          </div>
          <div className="stand-icons">
            <img src={Stand3} alt="" />
            <h5>Collaboration</h5>
          </div>
          <div className="stand-icons">
            <img src={Stand4} alt="" />
            <h5>Quality & Comfort</h5>
          </div>
          <div className="stand-icons">
            <img src={Stand5} alt="" />
            <h5>Sustainibility</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StandFor