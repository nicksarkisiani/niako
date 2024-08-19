import React from 'react';
import styles from '../styles/profilepage.module.css'

const ProfilePage = () => {
    return (
        <section className={styles.profile}>
            <div className={styles.container}>
                <div className={styles.img}>
                    <img src={require('../assets/niaa.jpg')} alt="nia"/>
                </div>
                <div className={styles.profileinfo}>
                    <div className={styles.info}>
                        <h3>სახელი: </h3><span>ნიაკო</span>
                    </div>
                    <div className={styles.info}>
                        <h3>გვარი: </h3><span>კობალაძე</span>
                    </div>
                    <div className={styles.info}>
                        <h3>სქესი: </h3><span>მდედრობითი</span>
                    </div>
                    <div className={styles.info}>
                        <h3>ასაკი:</h3><span>აწი 19 :) </span>

                    </div>
                    <div className={styles.info}>
                        <h3>ჰობი:</h3>
                        <span>უი უხობა, გრაფიკული დიზაინერობა, ანიმეების ყურება, ხალხის დაცინცა, ირონია, განათლება, შრომა</span>
                    </div>
                    <div className={styles.info}>
                        <h3>საყვარელი ანიმე: </h3><span>Jojo(ალბათ) </span>
                    </div>
                    <div className={styles.info}>
                        <h3>ფონტები რომლებიც იცის: </h3><span>ყველა, მაგრამ კერძოდ: Mersad, Firago, LGVAnastasia, Neon, Venuri, Nino Mtavruli, Paziruli - უფრო მეტის სანახავად შეგიძლიათ დაგუგლოთ :)</span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProfilePage;