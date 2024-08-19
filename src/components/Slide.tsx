import React from 'react';
import styles from '../styles/facts.module.css'
import {NavLink} from "react-router-dom";

interface IProps {
    img: string
    h1: string
    h2: string
    span: string
    objectFit?: "cover" | "contain"
    navLink: string
}

const Slide: React.FC<IProps> = ({img, h1,h2, span, objectFit="cover", navLink}) => {
    return (
        <div className={styles.slide}>
            <div className={styles.container}>
                <div className={styles.img}>
                    <img src={require(`../assets/${img}`)} alt="niako"  style={{objectFit: objectFit}}/>
                </div>
                <div className={styles.info}>
                    <h1>{h1}</h1>
                    <h2>{h2} <span>{span}</span></h2>
                    <button>
                        <NavLink to={navLink} className={styles.navlink}>
                        სრულად ნახვა <svg width="21" height="15" viewBox="0 0 21 15" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.7071 8.20711C21.0976 7.81659 21.0976 7.18342 20.7071 6.7929L14.3431 0.428934C13.9526 0.03841 13.3195 0.0384099 12.9289 0.428934C12.5384 0.819459 12.5384 1.45262 12.9289 1.84315L18.5858 7.5L12.9289 13.1569C12.5384 13.5474 12.5384 14.1805 12.9289 14.5711C13.3195 14.9616 13.9526 14.9616 14.3431 14.5711L20.7071 8.20711ZM-1.54031e-07 8.5L20 8.5L20 6.5L1.54031e-07 6.5L-1.54031e-07 8.5Z"
                            fill="white"/>
                    </svg>
                        </NavLink>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Slide;