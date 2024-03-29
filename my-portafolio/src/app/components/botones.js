"use client"
import Image from "next/image";
import download from '../assets/icons/download.svg'
import style from './botones.module.css'

function Botones(){
    return(
        <div className={style["buttons"]}>
            <button className={style["btn-primary"]}>
                <div className={style["btn-content"]}>
                    <p>Download CV</p>
                    <Image src={download} alt="arrow" className={style["btn-primary-img"]}/>
                </div>
            </button>
            <a className={style["btn-secondary"]} href="mailto:contact@me.com">
                <div className={style["btn-content"]}>
                    <p>Contact me</p>
                </div>
            </a>
        </div>
    );
}

export default Botones;
