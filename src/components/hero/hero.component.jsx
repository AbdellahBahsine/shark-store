import React from 'react';
import './hero.styles.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import styled from 'styled-components';

const Title = styled.h2`
    font-family: 'Merriweather', serif;
    font-size: 36px;
    margin: 0;
    color: #fff;
`;

const Span = styled.span`
    color: #94B0B3;
`;

const Text = styled.p`
    font-size: 16px;
    width: 60%;
`;

const Hero = () => {

    SwiperCore.use([Pagination, Autoplay ])

    return (
        <Swiper slidesPerView={1} pagination={{clickable: true}} autoplay>
            <SwiperSlide>
                <Title className="slider__title">Welcome to Shark <Span>Store</Span></Title>
                <Text className="slider__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nisi, perspiciatis laudantium explicabo quidem facilis eos neque velit, minus fugiat sapiente totam officia aperiam. Expedita nemo ut repellat quisquam tempore?</Text>
            </SwiperSlide>
            <SwiperSlide>
                <Title className="slider__title">Welcome to Shark <Span>Store</Span></Title>
                <Text className="slider__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nisi, perspiciatis laudantium explicabo quidem facilis eos neque velit, minus fugiat sapiente totam officia aperiam. Expedita nemo ut repellat quisquam tempore?</Text>
            </SwiperSlide>
            <SwiperSlide>
                <Title className="slider__title">Welcome to Shark <Span>Store</Span></Title>
                <Text className="slider__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nisi, perspiciatis laudantium explicabo quidem facilis eos neque velit, minus fugiat sapiente totam officia aperiam. Expedita nemo ut repellat quisquam tempore?</Text>
            </SwiperSlide>
        </Swiper>
    )
}

export default Hero;