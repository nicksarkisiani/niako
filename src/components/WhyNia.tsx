import React from 'react';
import styles from '../styles/whynia.module.css'
import CardWhy from "./CardWhy";

const WhyNia = () => {
    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles.whynia}>
                        <h1>რატომ ჩვენი <span>ნიაკო?</span></h1>
                    </div>

                    <div className={styles.sitbo}>
                        <p>საბეჭდი და ტიპოგრაფიული კომპანია “სითბო”-ს უშინაარსო ტექსტია. იგი სტანდარტად ათას-ცხრაას-ორიათას... ოთხმოცდათექვსმეტიანი წლებიდან იქცა, როდესაც უცნობმა ვირმა პროგრამისტმა მოსთხოვა გამორჩეულ უი უხერს CV-ს მომზადება. </p>
                    </div>
                </div>

                <div className={styles.info}>
                    <CardWhy
                        text={"ყველაზე მეტად ამ ცხოვრებაში უყვარს ფული, მაგიტომაც დღედაღამ უფასო კურსებზე წვალობს, რათა გამოცდილება მოაგროვოს 😹"}
                        title={"Მერკანტილიზმი"}
                        img={"money.png"}
                    />
                    <CardWhy
                        text={"მისი თვალისგან არ გაეპარება არც ერთი დეტალი. ყველაფერს ამჩნევს, რათა მომავალში გამოიყენოს თავის გამორჩეულ საბაკალავრო-სამაგისტრო-სადოქტორო უი-უხ ნაშრომებში."}
                        title={"პრაქტიკაზე დაფუძნებული სწავლება"}
                        img={"idea.png"}
                    />
                    <CardWhy
                        text={"ერთ-ერთი მისი ცნობილი დაკვირვება - Why do Java developers wear glasses? Because they don't C# 😹"}
                        title={"სიღრმისეული ცოდნები"}
                        img={"shota.jpg"}
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyNia;