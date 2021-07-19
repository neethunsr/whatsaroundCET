import React from 'react';
import Card from './Card';
import './travel.css';
import logoTravel from './images/logo-travel.svg'

const cardItems = [
    {name: 'Kovalam', imgsrc: '/images/k1.jpg', rs: '150', dis: '12'},
    {name: 'Ponmudi', imgsrc: '/images/k2.jpg', rs: '300', dis: '45'},
    {name: 'Meenmutti', imgsrc: '/images/k3.jpg', rs: '250', dis: '40'},
    {name: 'Rosemala', imgsrc: '/images/k4.jpg', rs: '250', dis: '40'},
    {name: 'Vazhvanthol', imgsrc: '/images/k5.jpg', rs: '250', dis: '40'},
    {name: 'Varkala', imgsrc: '/images/k6.jpg', rs: '250', dis: '40'},
    {name: 'Kanakakunnu', imgsrc: '/images/k7.jpg', rs: '250', dis: '40'}
];

function Travel(props) {
    return (
        <div className="travel container">
            <div className="header">
                <div className="travel-logo">
                    <img src={logoTravel} />
                </div>
            </div>
            <div className="travel-body">
            {cardItems.map((cItem, index) => (
                        <Card 
                            key={index}
                            name={cItem.name}
                            imgsrc={cItem.imgsrc}
                            rs={cItem.rs}
                            dis={cItem.dis}
                        />
                    ))}
            </div>
            
        </div>
    );
}

export default Travel;