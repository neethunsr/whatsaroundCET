import React from 'react';
import Card from './Card';
import './travel.css';
import logoTravel from './images/logo-travel.svg'

const cardItems = [
    {name: 'Kovalam', imgsrc: '/images/k1.jpg', rs: '150', dis: '12'},
    {name: 'Ponmudi', imgsrc: '/images/k2.jpg', rs: '300', dis: '45'},
    {name: 'Meenmutti', imgsrc: '/images/k3.jpg', rs: '250', dis: '40'}
    // {name: 'BOOKS', imgsrc: '/books', rs: 'bi bi-book', dis: '12'},
    // {name: 'FOOD', imgsrc: '/food', rs: 'bi bi-cup-straw', dis: '12'}
];

function Travel(props) {
    return (
        <div className="travel-container">
            <div className="header">
                <div className="travel-logo">
                    <img src={logoTravel} />
                </div>
            </div>
            <div className="travel-body">
            {/* <Card name='Kovalam' imgsrc='/images/k1.jpg' rs='200' dis='12' />
            <Card name='Kovalam' imgsrc='/images/k1.jpg' rs='200' dis='12' /> */}
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