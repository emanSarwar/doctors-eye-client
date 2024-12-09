import React from "react";
import aboutImg from "./about-img.jpg";
// import { useLocation, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./About.css";

const About = () => {
  const navigate = useNavigate();
  // const location =useLocation();
  const from = "/signup";
  const handleClick = () => {
    navigate(from, { replace: true });
  };

  return (
    <>
    <div className="bg-teal-700 min-h-screen">
    <h1 className="bg-emerald-900 text-5xl p-5 text-center mb-5 font-bold">About Us</h1>

    <div className="hero about-bg  bg-base-200">
        <div className="hero-content   flex-col md:flex-row-reverse">
          <img src={aboutImg} className="w-full md:w-1/3  bg-base-200  rounded-lg shadow-2xl" alt="" />
          <div className="md:w-1/2">
            
            <p className="text-justify text-2xl">
              At doctors-eye, our aim is to offer you doctors-instruction that show you that we really care! Not only have we got the trendiest prescription, but we can also guarantee that they are of the finest and best quality.</p>
              <p className="text-justify py-2 text-2xl">We started as a small business in California, and our aim is to continue providing services to our patients that keep them happy. Our customers are our top priority and through our products we work hard towards building long-lasting and meaningful
              relations with them.
            </p>
            <button onClick={handleClick} className="btn my-5 btn-primary">
              Go to login page
            </button>
          </div>
        </div>
        
      </div>
    </div>
    
    
      
    </>
  );
};

export default About;
