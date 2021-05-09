import styled from 'styled-components';
import image from '../../assets/image-2.jpg';

export const HeroContainer = styled.section`
    display: flex;
    flex-direction: column;
    height: 450px;
    width: 90%;
    margin: 15px auto;
    border: 2px solid #324B4E;
    color: #fff;
    background-image: url(${image});
    background-position: center;
    background-size: cover;
    padding: 100px 0 0 80px;
`;
