import React from "react";

const Review = ({ review }) => {
  const { name, img, raview, location, extraComment } = review;
  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body">
        <h2 className="text-3xl text-start">{name}</h2>
        <hr />
        
        <p className="text-justify">{raview}</p>
        <h2 className="justify-start">Location: {location}</h2>
        
      </div>
      
      <div className="flex m-8">
        
        <img src={img} className="w-20 mr-5 rounded-full" alt="" />
        
        <p className="">{extraComment}</p>
      </div>
    </div>
  );
};

export default Review;
