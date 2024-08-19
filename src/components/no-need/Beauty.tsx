import React from 'react';
import styles from '../../styles/facts.module.css'

const Beauty = () => {
    return (
        <div className={styles.slide}>
            <div className={styles.container}>
                <div className={styles.img}>
                    <img src={require('../../assets/niako.jpeg')} alt="niako"/>
                </div>
                <div className={styles.info}>
                    <h1>ნიას სილამაზე</h1>
                    <h2>თუ გაბრმავება გინდა, მაშინ იხილე <span>მისი სილამაზე</span></h2>
                    <button>
                        სრულად ნახვა <svg width="21" height="15" viewBox="0 0 21 15" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.7071 8.20711C21.0976 7.81659 21.0976 7.18342 20.7071 6.7929L14.3431 0.428934C13.9526 0.03841 13.3195 0.0384099 12.9289 0.428934C12.5384 0.819459 12.5384 1.45262 12.9289 1.84315L18.5858 7.5L12.9289 13.1569C12.5384 13.5474 12.5384 14.1805 12.9289 14.5711C13.3195 14.9616 13.9526 14.9616 14.3431 14.5711L20.7071 8.20711ZM-1.54031e-07 8.5L20 8.5L20 6.5L1.54031e-07 6.5L-1.54031e-07 8.5Z"
                            fill="white"/>
                    </svg>

                    </button>
                </div>
            </div>
        </div>

    );
};

export default Beauty;