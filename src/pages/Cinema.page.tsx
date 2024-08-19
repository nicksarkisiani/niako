import React from 'react';
import styles from '../styles/cinamepage.module.css'
import Filter from '../components/Filter'
import Catalog from "../components/Catalog";

const CinemaPage = () => {
    return (
        <section className={styles.cinema}>
            <div className={styles.container}>
                <Filter />
                <Catalog />
            </div>
        </section>
    );
};

export default CinemaPage;