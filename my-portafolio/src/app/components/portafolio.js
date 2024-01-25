import React from "react";
import style from './portafolio.module.css'

function Portafolio(){
    return(
        <div className={style["main-container"]}>
            <div className={style["perfil-info"]}>
                <div className={style["perfil-img"]}>
                    <img src={require("../assets/images/perfil_picture.jpeg")} alt="foto de perfil"/>
                </div>
                <div className={style["perfil-name"]}>
                    <div className={style["name"]}>
                        <h2>Luis Vallejos</h2>
                        <p>Front-end Junior</p>
                    </div>
                    <div className={style["perfil-icons"]}>
                        <a href="https://github.com/Lferd10"><img src={require("../assets/icons/github.svg")} alt="github"/></a>
                        <a href="https://twitter.com/VallejosCopa"><img src={require("../assets/icons/twitter.svg")} alt="twitter"/></a>
                        <a href="https://www.linkedin.com/"><img src={require("../assets/icons/linkedin.svg")} alt="linkedin"/></a>
                        <a href="https://www.youtube.com/channel/UCTS50nbi3GP0hSHTcnc57bQ"><img src={require("../assets/icons/youtube.svg")} alt="youtube"/></a>
                    </div>
                </div>
            </div>
            
            <div className={style["perfil-facts"]}>
                <div className={style["facts"]}>
                    <p >7</p>
                    <p>Years of work experience</p>
                </div>
                <div className={style["facts"]}>
                    <p>50+</p>
                    <p >Completed projects</p>
                </div>
                <div className={style["facts"]}>
                    <p>20+</p>
                    <p>Satisfied customers</p>
                </div>
            </div>

            <div className={style["perfil-buttons"]}>
                <button className={style["download"]}>Download CV</button>
                <button className={style["contact"]}>Contact me</button>
            </div>

            <div className={style["tabs-buttons"]}>
                <button className={style["portafolio"]}>Portafolio</button>
                <button className={style["skills"]}>Skills</button>
            </div>

            <div className={style["tabs-content"]}>
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