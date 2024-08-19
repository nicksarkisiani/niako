import React from 'react';
import styles from '../styles/picturepage.module.css'
import pictures from '../info/pictures.json'

const PicturesPage = () => {
    return (
        <section className={styles.picturespage}>
            <div className={styles.container}>
                {pictures.map(item => (
                    <div className={styles.picture} key={item.id}>
                        <img src={item.url} alt="picture"/>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PicturesPage;