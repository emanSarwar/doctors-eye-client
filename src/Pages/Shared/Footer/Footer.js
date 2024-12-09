import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="foot-style p-10 bg-neutral text-neutral-content">
      <div className="footer flex flex-col items-center mb-10 sm:flex-row sm:justify-around">
        <div className="mb-6 sm:mb-0">
          <span className="footer-title text-2xl">Services</span>
          <Link to="/"  className="link link-hover">Branding</Link>
          <Link to="/"  className="link link-hover">Design</Link>
          <Link to="/"  className="link link-hover">Marketing</Link>
          <Link to="/"  className="link link-hover">Advertisement</Link>
        </div>
        <div  className="mb-6 sm:mb-0">
          <span className="footer-title text-2xl">Company</span>
          <Link to="/"  className="link link-hover">About us</Link>
          <Link to="/"  className="link link-hover">Contact</Link>
          <Link to="/"  className="link link-hover">Jobs</Link>
          <Link to="/"  className="link link-hover">Press kit</Link>
        </div>
        <div  className="mb-6 sm:mb-0">
          <span className="footer-title text-2xl">Legal</span>
          <Link to="/"  className="link link-hover">Terms of use</Link>
          <Link to="/"  className="link link-hover">Privacy policy</Link>
          <Link to="/"  className="link link-hover">Cookie policy</Link>
        </div>
      </div>
      
      <div className="text-center">
      <hr />
        <p className="py-3">Copyright © 2023 - All right reserved</p>
        <hr />
      </div>
    </footer>
  );
};

export default Footer;
