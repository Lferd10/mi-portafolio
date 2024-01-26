"use client"
import style from './tabs.module.css'

function Tabs(){
    return(
        <div className={style["tabs"]}>
            <button className={style["tabs-background-item active"]}>
                <p className={style["tabs-background-item-text"]}>Portfolio</p>
            </button>
            <button className={style["tabs-background-item"]}>
                <p className={style["tabs-background-item-text"]}>Skills</p>
            </button>
        </div>
    );
}

export default Tabs;