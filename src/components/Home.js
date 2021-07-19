import React from 'react';
import logo from './images/logo.svg'
import cet from './images/cet.png'
import './Home.css'
function Home(props) {
    return (
        <div>
            <div className="container">
                <div className="col-6">
                <img src={logo} className="logo-home" alt="whatsaroundCET"></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus cursus vitae, felis suspendisse enim sit. Montes, dictum nisi turpis volutpat venenatis facilisis sit eu proin.?</p>
                </div>
                <div className="col-6">
                <img src={cet}></img>
                </div>
            </div>
            
        </div>
    );
}

export default Home;