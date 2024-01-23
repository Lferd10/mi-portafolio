import React from "react";
import '../styles/Galeria.css'

function Galeria(){
    return(
        <div className="contenedor-galeria">
            <div className="perfil">
                <img src={require('../assets/images/mobile_app.png')} alt="foto de perfil"/>
                <p>Pepito</p>
            </div>
            <div className="galeria">
                <img src={require('../assets/images/mobile_app.png')} alt="foto de la galeria"/>
                <img src={require('../assets/images/mobile_app.png')} alt="foto de la galeria"/>
                <img src={require('../assets/images/mobile_app.png')} alt="foto de la galeria"/>
                <img src={require('../assets/images/mobile_app.png')} alt="foto de la galeria"/>
                <img src={require('../assets/images/mobile_app.png')} alt="foto de la galeria"/>
                <img src={require('../assets/images/mobile_app.png')} alt="foto de la galeria"/>
                <img src={require('../assets/images/mobile_app.png')} alt="foto de la galeria"/>
                <img src={require('../assets/images/mobile_app.png')} alt="foto de la galeria"/>
                <img src={require('../assets/images/mobile_app.png')} alt="foto de la galeria"/>
                <img src={require('../assets/images/mobile_app.png')} alt="foto de la galeria"/>
                <img src={require('../assets/images/mobile_app.png')} alt="foto de la galeria"/>
                <img src={require('../assets/images/mobile_app.png')} alt="foto de la galeria"/>
            </div>
        </div>
    );
}
export default Galeria;