import React from 'react';
import styles from '../styles/cardwhy.module.css'

interface ICardWhyProps {
    text: string
    img: string
    title: string
}

const CardWhy: React.FC<ICardWhyProps> = ({text, img, title}) => {
    return (
        <div className={styles.card}>
            <div className={styles.title}>
                <div className={styles.img}>
                    <img src={require(`../assets/${img}`)} alt=""/>
                </div>
                <div className={styles.h2}>
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 10.7231L-9.78799e-07 21.1154L-7.02746e-08 0.330839L18 10.7231Z" fill="#8447FF"/>
                    </svg>
                    <h2>{title}</h2>
                </div>
            </div>

            <div className={styles.text}>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default CardWhy;