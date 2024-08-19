import React from 'react';
import styles from '../styles/header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <NavLink to='/' className={styles.logo}>
                    <img src={require('../assets/logo.png')} alt="logo"/>
                </NavLink>
                <div className={styles.bar}>
                    <nav className={styles.nav}>
                        <ul className={styles.ul}>
                            <li>
                                <NavLink to="/pictures">კურსები</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cinema">ვიდეო ლექციები</NavLink>
                            </li>
                            <li>
                                <NavLink to='/beauty'>ბიბლიოთეკა</NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile">კონტაქტი</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.buttons}>
                        <ul className={styles.svgUl}>
                            <li>
                                <a href="#" className={styles.svg}>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.6"
                                              d="M16.8653 17L21 21M19.6667 10.3333C19.6667 15.488 15.488 19.6667 10.3333 19.6667C5.17868 19.6667 1 15.488 1 10.3333C1 5.17868 5.17868 1 10.3333 1C15.488 1 19.6667 5.17868 19.6667 10.3333Z"
                                              stroke="black" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={styles.svg}>
                                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.6"
                                              d="M22.5 6.625C22.5 3.72583 20.0512 1.375 17.0307 1.375C14.7732 1.375 12.8342 2.68867 12 4.5635C11.1658 2.68867 9.22683 1.375 6.96817 1.375C3.95 1.375 1.5 3.72583 1.5 6.625C1.5 15.0483 12 20.625 12 20.625C12 20.625 22.5 15.0483 22.5 6.625Z"
                                              stroke="black" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                    </svg>


                                </a>
                            </li>
                            <li>
                                <a href="#" className={styles.svg}>
                                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.6"
                                              d="M16.3755 11.25V6C16.3755 4.83968 15.9145 3.72688 15.0941 2.90641C14.2736 2.08594 13.1608 1.625 12.0005 1.625C10.8401 1.625 9.72735 2.08594 8.90688 2.90641C8.08641 3.72688 7.62547 4.83968 7.62547 6V11.25M20.8741 8.92483L22.3476 22.9248C22.4293 23.7007 21.8226 24.375 21.0421 24.375H2.9588C2.77471 24.3752 2.59264 24.3367 2.42441 24.2619C2.25618 24.1872 2.10556 24.0778 1.98233 23.9411C1.8591 23.8043 1.76602 23.6432 1.70913 23.4681C1.65225 23.293 1.63283 23.1079 1.65214 22.9248L3.1268 8.92483C3.16082 8.60232 3.31303 8.30382 3.5541 8.08688C3.79516 7.86995 4.108 7.74994 4.4323 7.75H19.5686C20.2406 7.75 20.8041 8.2575 20.8741 8.92483ZM8.06297 11.25C8.06297 11.366 8.01688 11.4773 7.93483 11.5594C7.85278 11.6414 7.7415 11.6875 7.62547 11.6875C7.50944 11.6875 7.39816 11.6414 7.31611 11.5594C7.23406 11.4773 7.18797 11.366 7.18797 11.25C7.18797 11.134 7.23406 11.0227 7.31611 10.9406C7.39816 10.8586 7.50944 10.8125 7.62547 10.8125C7.7415 10.8125 7.85278 10.8586 7.93483 10.9406C8.01688 11.0227 8.06297 11.134 8.06297 11.25ZM16.813 11.25C16.813 11.366 16.7669 11.4773 16.6848 11.5594C16.6028 11.6414 16.4915 11.6875 16.3755 11.6875C16.2594 11.6875 16.1482 11.6414 16.0661 11.5594C15.9841 11.4773 15.938 11.366 15.938 11.25C15.938 11.134 15.9841 11.0227 16.0661 10.9406C16.1482 10.8586 16.2594 10.8125 16.3755 10.8125C16.4915 10.8125 16.6028 10.8586 16.6848 10.9406C16.7669 11.0227 16.813 11.134 16.813 11.25Z"
                                              stroke="black" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                    </svg>

                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.login}>
                        <button className={styles.buttonLogin}>
                            <a href="#">შესვლა</a>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
