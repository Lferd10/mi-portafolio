"use client"
import style from '';

import Image from "next/image";
import github from '../assets/icons/github.svg'
import twitter from '../assets/icons/twitter.svg'
import linkedin from '../assets/icons/linkedin.svg'
import youtube from '../assets/icons/youtube.svg'

function Perfil(){
    return(
        <div className={style["profile"]}>
            <figure className={style["profile-img"]}>
                <img src="assets/images/perfil_picture.jpeg" />
            </figure>
            <div className={style["profile-info"]}>
                <h1>Victor Alvarado</h1>
                <p>Software Engineer</p>
                <div className={style["profile-social"]}>
                    <a href="https://github.com/Lferd10" target="_blank">
                        <Image src={github} alt="github" className={style["profile-social-img"]}/>
                    </a>
                    <a href="https://twitter.com/VallejosCopa" target="_blank">
                        <Image src={twitter} alt="github" className={style["profile-social-img"]}/>
                    </a>
                    <a href="https://linkedin.com" target="_blank">
                        <Image src={linkedin} alt="github" className={style["profile-social-img"]}/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCTS50nbi3GP0hSHTcnc57bQ" target="_blank">
                        <Image src={youtube} alt="github" className={style["profile-social-img"]}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Perfil;