import React from 'react';
import logo from './images/logo.svg'
import cet from './images/cet-illustration.svg'
import circle from './images/circles(1).svg'
import './Home.css'
function Home(props) {
    return (
        <div>
            <div className="container">
                <div className="row">
                <div className="col col-lg-4 align-items-center">
                <img src={logo} className="logo-home" alt="whatsaroundCET"></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus cursus vitae, felis suspendisse enim sit. Montes, dictum nisi turpis volutpat venenatis facilisis sit eu proin.?</p>
                </div>
                <div className="col col-xs-12 col-lg-8">
                <img src={cet} className="img-cet" alt="cet"></img>
                </div>
                </div>
                
                <a href="#" class="btn btn-outline-primary">Subscribe</a>
                
            </div>
            
            <section>
            <div className="container align-items-center">
                <div className="explore">
                <h3>Explore the world around CET</h3>
                </div>
                <hr></hr>
                <img className='img-circle' src={circle} alt="circle"></img>
                
            </div>
            </section>
        </div>
    );
}

export default Home;