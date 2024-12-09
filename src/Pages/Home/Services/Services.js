import React from "react";
import Service from "./Service";
import stroke from "./teeth-img/stroke.png";
import heartFailure from "./teeth-img/HeartFailure.png";
import thyroid from "./teeth-img/thyroid.png";
import "./Services.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const from = "/appointment";
  const handleClick = () => {
    navigate(from);
  };
  const serviceInfo = [
    {
      id: 1,
      name: "Stroke",
      description:
        "A stroke, sometimes called a brain attack, occurs when something blocks blood supply to part of the brain or when a blood vessel in the brain bursts. In either case, parts of the brain become damaged or die. A stroke can cause lasting brain damage, long-term disability, or even death.",
      img: stroke,
    },
    {
      id: 2,
      name: "Heart Failure",
      description:
        "Heart failure occurs when the heart muscle doesn't pump blood as well as it should. When this happens, blood often backs up and fluid can build up in the lungs, causing shortness of breath. Certain heart conditions gradually leave the heart too weak or stiff to fill and pump blood properly.",
      img: heartFailure,
    },
    {
      id: 3,
      name: "Thyroid Cancer",
      description:
        "Thyroid cancer is a disease in which malignant (cancer) cells form in the tissues of the thyroid gland. Thyroid nodules are common but usually are not cancer. There are different types of thyroid cancer. Age, gender, and being exposed to radiation can affect the risk of thyroid cancer.",
      img: thyroid,
    },
  ];
  return (
    <div className="bg-emerald-900 p-5">
      <h2 style={{color: "bisque"}} className="text-5xl text-center font-bold">Our Services</h2>
      <div className="grid gap-6 p-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {serviceInfo.map((teeth) => (
          <Service key={teeth.id} teeth={teeth}></Service>
        ))}
      </div>
      <div className="grid pb-3 place-items-center">
        <button onClick={handleClick} className="btn w-96 btn-outline btn-danger">
          Get All Services
        </button>
      </div>
    </div>
  );
};

export default Services;
