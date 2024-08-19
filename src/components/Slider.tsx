import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {Pagination} from "swiper/modules";
import 'swiper/css/pagination';
import styles from "../styles/slider.module.css"
import Slide from "./Slide";

const Slider = () => {
    return (
        <div className={styles.slider}>
            <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide><Slide img={"film.jpg"} h1={"ნიას ნახატები!"} h2={'თუ საკუთარი შესაძლებლობის დაჩმორება გსურთ, მაშინ იხილე'} span={'ულამაზესი ნაშრომები'} objectFit={'contain'} navLink={'/pictures'}/></SwiperSlide>
                <SwiperSlide><Slide img={"girl.png"} h1={"ნია და Cinematography!"} h2={'თუ გამოხვედი პადვალიდან, მაშინ იხილე'} span={'საინტერესო მომენტები ფილმებიდან'} navLink={'/cinema'}/></SwiperSlide>
                <SwiperSlide><Slide img={"niako.jpeg"} h1={"ნიას სილამაზე!"} h2={'თუ გაბრმავება გინდა, მაშინ იხილე '} span={'მისი სილამაზე'} objectFit={'cover'} navLink={'/beauty'}/></SwiperSlide>
                <SwiperSlide><Slide img={"graphic.jpg"} h1={"შევისწავლოთ ნიაკო!"} h2={'იხილე'} span={'ფაქტები ნიაზე'} objectFit={'contain'} navLink={'/profile'}/></SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Slider;