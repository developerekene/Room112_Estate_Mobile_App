import React from 'react'
import '../cards/cards.css'
import Card1 from '../../images/card1.png'
import Card2 from "../../images/card2.png";
import Card3 from "../../images/card3.png";

const Cards = () => {
  return (
    <section className="card-container">
      <div className="card">
        <div className="card-img">
          <img src={Card1} alt=""/>
        </div>
        <div className="card-text">
          <h2>Vision</h2>
          <p>
            “To redefine real estate buying experience at the tip of your
            fingers by providing consumer focus web platform.”
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-img">
          <img src={Card2} alt=""  />
        </div>
        <div className="card-text">
          <h2>Mission</h2>
          <p>
            “To collaborate with skilled professionals from multiple verticals
            of the Indian real estate sector providing home buyers a convenient
            & anchored experience.”
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-img">
          <img src={Card3} alt="" />
        </div>
        <div className="card-text">
          <h2>Goal</h2>
          <p>
            “Establish ourselves as a reliable medium between the demand side
            and the supply side of the real estate industry ” one-stop
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cards