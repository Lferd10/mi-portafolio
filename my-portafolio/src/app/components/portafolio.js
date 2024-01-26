"use client"

import React from "react";
import style from './portafolio.module.css'

import Perfil from "./perfil.js";
import Facts from "./facts.js";
import Botones from "./botones.js";
import Tabs from "./tabs.js";
import Galeria from "./galeria.js";

function Portafolio(){
    return(
        <div className={style.main}>
            <div className={style["container"]}>
                <Perfil/>
                <Facts/>
                <Botones/>
                <Tabs/>
                <Galeria/>
            </div>
        </div>
    );
}

export default Portafolio;