import React from 'react';
import Card from './Card';
import './travel.css';
import logoTravel from './images/logo-travel.svg'

function Travel(props) {
    return (
        <div className="travel container">
            <div className="header">
                <div className="travel-logo">
                    <img src={logoTravel} />
                </div>
            </div>
            <div className="travel-body">
            <Card />
            <Card />
            </div>
            
        </div>
    );
}

export default Travel;