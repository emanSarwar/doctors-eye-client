import React from "react";
import './Service.css'

const Service = ({teeth}) => {
  const {name, img, description} = teeth;
  return (
    <div className="card serv-cont shadow-xl">
      <figure>
        <img className="rounded-lg" src={img} alt="Shoes" />
      </figure>
      <div  className="card-body serv-body">
        <h2 className="text-2xl font-bold text-center">{name}</h2>
        <p className="text-justify">{description}</p>
        
      </div>
    </div>
  );
};

export default Service;
