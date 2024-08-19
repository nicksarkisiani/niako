import React from 'react';
import styles from '../styles/footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={require('../assets/logo.png')} alt="logo"/>
                </div>

                <div className={styles.main}>
                    <div className={styles.contactus}>
                        <div className={styles.links}>
                            <div className={styles.column}>
                                <h2>აკადემია</h2>
                                <ul>
                                    <li>
                                        <a href="/">კურსები</a>
                                    </li>
                                    <li>
                                        <a href="/">ვიდეო ლექციები</a>
                                    </li>
                                    <li>
                                        <a href="/">ბიბლიოთეკა</a>
                                    </li>
                                    <li>
                                        <a href="/">კონტაქტი</a>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.column}>
                                <h2>დახმარება</h2>
                                <ul>
                                    <li>
                                        <a href="/">მხარდაჭერა</a>
                                    </li>
                                    <li>
                                        <a href="/">მონაცემთა დაცვა</a>
                                    </li>
                                    <li>
                                        <a href="/">წესები და პირობები</a>
                                    </li>
                                    <li>
                                        <a href="/">დეტალები</a>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.column}>
                                <h2>რესურსები</h2>
                                <ul>
                                    <li>
                                        <a href="/">უფასო ლექციები</a>
                                    </li>
                                    <li>
                                        <a href="/">უფასო ლიტერატურა</a>
                                    </li>
                                    <li>
                                        <a href="/">იუთუბ არხი</a>
                                    </li>
                                    <li>
                                        <a href="/">CV - maker</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.contact}>
                            <form className={styles.form}>
                                <label htmlFor="email">გამოგვიწერეთ სიახლეების მისაღებად</label>
                                <div>
                                    <input type="email" name="email" id="email" placeholder="მიუთითე ელფოსტა"/>
                                    <button type='submit'>გაწევრიანდი</button>
                                </div>
                            </form>

                            <div className={styles.info}>
                                <div className={styles.contactInfo}>
                                    <h3>დაგვირეკე</h3>
                                    <div className={styles.infoDiv}>
                                        <div>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                      d="M0.5 3.5C0.5 2.70435 0.816071 1.94129 1.37868 1.37868C1.94129 0.816071 2.70435 0.5 3.5 0.5H4.872C5.732 0.5 6.482 1.086 6.691 1.92L7.796 6.343C7.88554 6.701 7.86746 7.07746 7.74401 7.42522C7.62055 7.77299 7.39723 8.07659 7.102 8.298L5.809 9.268C5.674 9.369 5.645 9.517 5.683 9.62C6.24738 11.1549 7.1386 12.5487 8.29495 13.7051C9.4513 14.8614 10.8451 15.7526 12.38 16.317C12.483 16.355 12.63 16.326 12.732 16.191L13.702 14.898C13.9234 14.6028 14.227 14.3794 14.5748 14.256C14.9225 14.1325 15.299 14.1145 15.657 14.204L20.08 15.309C20.914 15.518 21.5 16.268 21.5 17.129V18.5C21.5 19.2956 21.1839 20.0587 20.6213 20.6213C20.0587 21.1839 19.2956 21.5 18.5 21.5H16.25C7.552 21.5 0.5 14.448 0.5 5.75V3.5Z"
                                                      fill="#8447FF"/>
                                            </svg>
                                        </div>
                                        <span>(+995) 321 51 54 51</span>
                                    </div>
                                </div>
                                <div className={styles.contactInfo}>
                                    <h3>მოგვწერე</h3>
                                    <div className={styles.infoDiv}>
                                        <div>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M1.5 8.66992V17.2499C1.5 18.0456 1.81607 18.8086 2.37868 19.3712C2.94129 19.9339 3.70435 20.2499 4.5 20.2499H19.5C20.2956 20.2499 21.0587 19.9339 21.6213 19.3712C22.1839 18.8086 22.5 18.0456 22.5 17.2499V8.66992L13.572 14.1629C13.0992 14.4538 12.5551 14.6078 12 14.6078C11.4449 14.6078 10.9008 14.4538 10.428 14.1629L1.5 8.66992Z"
                                                    fill="#8447FF"/>
                                                <path
                                                    d="M22.5 6.908V6.75C22.5 5.95435 22.1839 5.19129 21.6213 4.62868C21.0587 4.06607 20.2956 3.75 19.5 3.75H4.5C3.70435 3.75 2.94129 4.06607 2.37868 4.62868C1.81607 5.19129 1.5 5.95435 1.5 6.75V6.908L11.214 12.886C11.4504 13.0314 11.7225 13.1084 12 13.1084C12.2775 13.1084 12.5496 13.0314 12.786 12.886L22.5 6.908Z"
                                                    fill="#8447FF"/>
                                            </svg>

                                        </div>
                                        <span>academy@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.br}>
                        <br/>
                    </div>

                    <div className={styles.social}>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;