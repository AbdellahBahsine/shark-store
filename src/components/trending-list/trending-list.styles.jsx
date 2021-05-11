import styled from 'styled-components';

export const TrendingListContainer = styled.div`
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    position: relative;
    text-transform: uppercase;
    font-weight: 600;
    padding-bottom: 4px;
    font-family: 'Merriweather', serif;
    font-weight: 400;
    letter-spacing: 2px;
    margin-top: 30px;

    &::after{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 40%;
        border-bottom: 2px solid #324B4E;
    }
`;