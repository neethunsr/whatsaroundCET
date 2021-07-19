import React from 'react';
import './Card.css';


function Card(props) {
    return (
        <div className="card-container">
            <div className="img-container">
                <img src="/images/k1.jpg" alt="img" width="300" />
            </div>
            <div className="card-title">
                <h3>Kovalam</h3> 
            </div>
            
        </div>
    );
}

export default Card;