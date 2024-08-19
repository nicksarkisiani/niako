import React from 'react';
import styles from '../styles/beautypage.module.css'
import beauty from '../info/beauty.json'

const BeautyPage = () => {
    return (
        <section className={styles.beautyPage}>
            <div className={styles.container}>
                {beauty.map(item => (
                    <div className={styles.beauty} key={item.id}>
                        <div className={styles.img}>
                            <img src={require(`../assets/niako/${item.link}`)} alt=""/>
                        </div>
                        <div className={styles.commentsPart}>
                                <div className={styles.commentTop}>
                                    <div className={styles.thumb}>
                                        <div className={styles.commentIcon}>
                                            <img src={require('../assets/niako/niakothumb.jpg')} alt=""/>
                                        </div>
                                        <div className={styles.nickname}>
                                            <a href='https://www.instagram.com/niakobaladze/' target='_blank' rel='noreferrer'>niakobaladze</a>
                                            <h3 className={styles.follow}>Follow</h3>
                                        </div>
                                    </div>

                                    <div className={styles.options}>
                                        <svg aria-label="More options"
                                             fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                                            <title>More options</title>
                                            <circle cx="12" cy="12" r="1.5"></circle>
                                            <circle cx="6" cy="12" r="1.5"></circle>
                                            <circle cx="18" cy="12" r="1.5"></circle>
                                        </svg>
                                    </div>
                                </div>

                                <div className={styles.comments}>
                                    <div className={styles.comment}>
                                        <div className={styles.authorthumb}>
                                            <img src={require('../assets/niako/thumb.jpg')} alt="thumb"/>
                                        </div>
                                        <div className={styles.commentText}>
                                            <div className={styles.commentAuthor}>
                                                <h3>angel</h3>
                                                <h4>{item.comment}</h4>
                                            </div>

                                            <div className={styles.commentDetails}>
                                                <h5>1d</h5>
                                                <h5>999 likes</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BeautyPage;