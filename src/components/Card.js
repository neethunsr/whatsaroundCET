import React from 'react';
import './Card.css';


function Card(props) {

    const {name, imgsrc, rs, dis} = props;
    return (
        <div className="card-container">
            <div className="img-container">
                <img src={imgsrc} alt="img" width="300" height="170" />
            </div>
            <div className="card-title">
                <h3>{name}</h3> 
            </div>
            <div className="card-footer">
                <div className="money">
                    <h4>Rs {rs}</h4>
                </div>
                <div className="dist">
                    <h4>{dis} Kms</h4>
                </div>
            </div>
            
        </div>
    );
}

export default Card;