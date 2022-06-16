import React from 'react'
import HeroImage from '../../images/heroImage.png'

const Header = () => {
  return (
    <section id="header">
      <div className="heroimg">
        <img src={HeroImage} alt="" className="hero" />
      </div>

      <div className="mini-nav">
        <ul className="sub-nav">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Pricings</a>
          </li>
        </ul>
      </div>

      <div className="zeal">
        <h2>Zeal</h2>
        <h5>/zi:l/</h5>
        <h2>noun</h2>
        <p>Great energy or enthusiasm in pursuit of a cause or an objective.</p>
      </div>
    </section>
  );
}

export default Header