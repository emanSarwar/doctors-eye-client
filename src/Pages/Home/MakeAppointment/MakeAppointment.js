import React from "react";
import appointmentImg from './appointment-img.png';
import appointmentBg from './appointment-bg.png';
import './MakeAppointment.css';
import { useNavigate } from "react-router-dom";

const MakeAppointment = () => {
  const navigte = useNavigate();
  const from = '/appointment';
  const handleClick = () =>{
    navigte(from);
  }

  return (
    <section className="mt-20"
    style={{
        background: `url(${appointmentBg})`
    }}>
    <div className="hero appointment-container">
      <div className="hero-content flex-col lg:flex-row">
        <img src={appointmentImg} className="-mt-20 max-w-sm rounded-lg" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Make an Appointment Today</h1>
          <p className="py-6 text-2xl">
            There are so many doctors to prescribe you. If you want to get any type of service. Please! confirm and pay for the services.
          </p>
          <button onClick={handleClick} className="btn btn-outline btn-primary">Go to Appointment Page</button>
          
        </div>
      </div>
    </div>
    </section>
  );
};

export default MakeAppointment;
