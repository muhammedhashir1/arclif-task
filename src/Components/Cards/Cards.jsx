import React from "react";
import cardItems from "../../Api/CardDetails.json";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards-section">
      <section className="container main">
        {cardItems?.map((cardItem, key) => {
          return (
            <div className="cardItem-container" key={key}>
              <img src={cardItem?.image} className='cardItem-img' alt="" />
              <h6>{cardItem?.title}</h6>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Cards;
