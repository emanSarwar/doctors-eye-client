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
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={aboutImg} className="w-100 bg-base-200 about-image rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl text-center font-bold">About Us</h1>
            <p className="text-justify py-2 text-2xl">
              At doctors-eye, our aim is to offer you doctors-instruction that show you that we really care! Not only have we got the trendiest prescription, but we can also guarantee that they are of the finest and best quality.</p>
              <p className="text-justify py-2 text-2xl">We started as a small business in California, and our aim is to continue providing services to our patients that keep them happy. Our customers are our top priority and through our products we work hard towards building long-lasting and meaningful
              relations with them.
            </p>
            <button onClick={handleClick} className="btn my-5 btn-primary">
              Go to SignIn page
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
