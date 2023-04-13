import React from "react";
import "./InfoCard.css"

const InfoCard = ({ card }) => {
  const { name, description, icon } = card;
  return (
    <div className="card card-side bg-base-100 shadow-xl info-part">
      <figure>
        <img src={icon} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        
      </div>
    </div>
  );
};

export default InfoCard;
