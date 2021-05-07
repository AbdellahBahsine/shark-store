import React from 'react';

import styled from 'styled-components';
import {HeroContainer} from './hero.styles';

const Title = styled.h2`
    font-family: 'Merriweather', serif;
    font-size: 36px;
    margin: 0;
    color: #fff;

    @media screen and (max-width: 678px){
        font-size: 30px;
    }
`;

const Span = styled.span`
    color: #94B0B3;
`;

const Text = styled.p`
    font-size: 16px;
    width: 60%;

    @media screen and (max-width: 678px){
        font-size: 14px;
        width: 80%;
    }
`;

const Hero = () => {

    return (
        <HeroContainer>
            <Title className="slider__title">Welcome to Shark <Span>Store</Span></Title>
            <Text className="slider__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nisi, perspiciatis laudantium explicabo quidem facilis eos neque velit, minus fugiat sapiente totam officia aperiam. Expedita nemo ut repellat quisquam tempore?</Text>
        </HeroContainer>
    )
}

export default Hero;