import React from 'react';
import icon1 from "./info-icon1.png";
import icon2 from "./info-icon2.png";
import icon3 from "./info-icon3.png";
import InfoCard from './InfoCard';
import './InfoCards.css'

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: "Open 9:00 am to 5:00 pm",
            icon: icon1
            // bgClass: 'bg-primary'
        },
        {
            id: 2,
            name: 'Location',
            description: "Located in USA, California",
            icon: icon2
            // bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: "Number: 00185430958",
            icon: icon3
            // bgClass: 'bg-primary'
        }
    ]
    return (
        <div className='grid bg-emerald-600  gap-6 pt-5 p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card =><InfoCard
                    key={card.id}
                    card={card}
                    ></InfoCard>)
            }
            
        </div>
    );
};

export default InfoCards;