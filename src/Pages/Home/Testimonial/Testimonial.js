import React from "react";
import Review from "./Review";
import Review1 from './review-image/reviewImg1.png';
import Review2 from './review-image/reviewImg2.png';
import Review3 from './review-image/reviewImg3.png';
import './testimonial.css'

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Farnandej",
      raview: "It’s one thing to say you put patients first. It’s completely different to actually embed that mantra into every department and interaction. Whether it’s something as simple as posting a wayfinding sign to guide patients to the right place, or as complex as implementing enterprise technology for clinicians, at every turn these hospitals are asking ‘How will this impact our patients?’ Every employee, whether or not they have a clinical or patient-facing role, has a patient-centric mindset and ‘patients come first’ is embedded in their DNA. ",
      location: "California",
      img: Review1,
      extraComment: "This is the best location for patients to medical services."
    },
    {
      id: 2,
      name: "Josephine",
      raview:
        "Patients enter through hospital doors at the most vulnerable time in their lives. They’re looking not only to get better, but they’re also seeking comfort. They’re searching for reassurance from healthcare professionals who will communicate with them directly and honestly, explain ‘here’s what we’re going to do’, and know they’re not alone in the battle they’re facing. The best hospitals deeply understand that empathy is a critical component of delivering exceptional patient care. They approach each patient as an individual, not a number or a disease or a condition. They treat them, and their families, like they would want their own loved ones to be treated.",
      location: "New York",
      img: Review2,
      extraComment: "Doctors are so friendly."
    },
    {
      id: 3,
      name: "Robert Harrison",
      raview:
        "These organizations didn’t land on the Best Hospitals Honor Roll by accident. The overwhelming majority have been on the list before – sometimes for years, sometimes for decades. That speaks to a systematic, purposeful commitment to excellence. It means their staff is dedicated to reviewing and measuring everything they do on a routine basis and employing process improvements, lean methodologies, and new technologies to do it even better. From the C-suite leaders to the clinicians to the contact center operators, they are fully committed to delivering the best outcomes and making their communities healthier. ",
      location: "Dhaka",
      img: Review3,
      extraComment: "You can get the services by online."
    }
  ];
  return (
    <section className="test-imonial p-5">
      <div>
        <h2 className="text-center patients-review text-4xl font-bold">Patients Review</h2>
      </div>
      <div className="grid gap-6 p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map(review =><Review 
        key={review.id} 
        review={review}></Review>
        )}
      </div>
    </section>
  );
};

export default Testimonial;
