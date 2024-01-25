import React from "react";
import '../styles/Portafolio.css'
import github from '../assets/icons/github.svg'
import twitter from '../assets/icons/twitter.svg'
import linkedin from '../assets/icons/linkedin.svg'
import youtube from '../assets/icons/youtube.svg'

function Portafolio(){
    return(
        <div className="main-container">
            <div className="perfil-info">
                <div className="perfil-img">
                    <img src={require("../assets/images/perfil_picture.jpeg")} alt="foto de perfil"/>
                </div>
                <div className="perfil-name">
                    <div className="name">
                        <h2>Luis Vallejos</h2>
                        <p>Front-end Junior</p>
                    </div>
                    <div className="perfil-icons">
                        <a href="https://github.com/Lferd10"><img src={github} alt="github"/></a>
                        <a href="https://twitter.com/VallejosCopa"><img src={twitter} alt="twitter"/></a>
                        <a href="https://www.linkedin.com/"><img src={linkedin} alt="linkedin"/></a>
                        <a href="https://www.youtube.com/channel/UCTS50nbi3GP0hSHTcnc57bQ"><img src={youtube} alt="youtube"/></a>
                    </div>
                </div>
            </div>
            
            <div className="perfil-facts">
                <div className="facts">
                    <p >7</p>
                    <p>Years of work experience</p>
                </div>
                <div className="facts">
                    <p>50+</p>
                    <p >Completed projects</p>
                </div>
                <div className="facts">
                    <p>20+</p>
                    <p>Satisfied customers</p>
                </div>
            </div>

            <div className="perfil-buttons">
                <button className="download">Download CV</button>
                <button className="contact">Contact me</button>
            </div>

            <div className="tabs-buttons">
                <button className="portafolio">Portafolio</button>
                <button className="skills">Skills</button>
            </div>

            <div className="tabs-content">
                <img src={require("../assets/images/kitchen.jpeg")} alt="foto 1"/>
                <img src={require("../assets/images/bussiness_man.png")} alt="foto 2"/>
                <img src={require("../assets/images/pictures_wall.jpeg")} alt="foto 3"/>
                <img src={require("../assets/images/kitchen.jpeg")} alt="foto 1"/>
                <img src={require("../assets/images/mobile_app.png")} alt="foto 5"/>
                <img src={require('../assets/images/issima_page.png')} alt="foto 6"/>
            </div>
        </div>
    );
}

export default Portafolio;