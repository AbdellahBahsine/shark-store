import React from 'react';
import './hero.styles.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

const Hero = () => {

    SwiperCore.use([Pagination, Autoplay ])

    return (
        <Swiper slidesPerView={1} pagination={{clickable: true}} autoplay>
            <SwiperSlide>
                <h2 className="slider__title">Welcome to Shark Store!</h2>
                <p className="slider__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur vel odit eum.</p>
            </SwiperSlide>
            <SwiperSlide>
                <h2 className="slider__title">Welcome to Shark Store!</h2>
                <p className="slider__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur vel odit eum.</p>
            </SwiperSlide>
            <SwiperSlide>
                <h2 className="slider__title">Welcome to Shark Store!</h2>
                <p className="slider__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur vel odit eum.</p>
            </SwiperSlide>
        </Swiper>
    )
}

export default Hero;