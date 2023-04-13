import React from "react";
import Banner1 from "./banner-img.png";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero mt- bg-base-200 bg-color">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Banner1} className="max-w-sm rounded-lg" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Medical Services Zone!</h1>
          <p className="py-6 text-2xl text-justify">
            Welcome to <span className="font-bold">doctors-eye!</span> We aim to offer our customers a variety of the latest Medical Hospitality. We've come a long way, so we know exactly which direction to take when servicing you with high quality. We offer all of this while providing
            excellent customer service and friendly support. We always keep an eye on the latest trends in the medical world and put our
            customers' wishes first. That is why we have satisfied our patients all over the USA. The interests of our patients are always top priority for us, so we hope you will enjoy our services as much as we enjoy making them available to you.
          </p>
          <button className="btn btn-info text-white"><Link to="/appointment">Get Started</Link></button>
          {/* <Link to="/about">About</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
