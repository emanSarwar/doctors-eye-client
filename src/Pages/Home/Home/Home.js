import React from 'react';
import Banner from '../Banner/Banner';
// import InfoCard from '../InfoCard/InfoCard';
import InfoCards from '../InfoCard/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <InfoCards/>
            
            <Services/>
            <hr />
            <MakeAppointment/>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;