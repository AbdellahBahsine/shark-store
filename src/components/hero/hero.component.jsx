import React from 'react';
import './hero.styles.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import styled from 'styled-components';

const Title = styled.h2`
    font-family: 'Merriweather', serif;
    font-size: 28px;
    margin: 0;
    color: #324B4E;
`;

const Text = styled.p`
    font-size: 16px;
`;

const Hero = () => {

    SwiperCore.use([Pagination, Autoplay ])

    return (
        <Swiper slidesPerView={1} pagination={{clickable: true}} autoplay>
            <SwiperSlide>
                <Title className="slider__title">Welcome to Shark Store!</Title>
                <Text className="slider__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur vel odit eum.</Text>
            </SwiperSlide>
            <SwiperSlide>
                <Title className="slider__title">Welcome to Shark Store!</Title>
                <Text className="slider__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur vel odit eum.</Text>
            </SwiperSlide>
            <SwiperSlide>
                <Title className="slider__title">Welcome to Shark Store!</Title>
                <Text className="slider__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur vel odit eum.</Text>
            </SwiperSlide>
        </Swiper>
    )
}

export default Hero;