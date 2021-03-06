import styled from 'styled-components';

export const Title = styled.h2`
    padding: 15px 0;
    border-top: 2px solid #324B4E;
    border-bottom: 2px solid #324B4E;
`;

export const Cards = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 60px;
    margin-bottom: 20px;

    @media screen and (max-width: 990px){
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media screen and (max-width: 500px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

export const Card = styled.div`
    position: relative;
    padding: 15px 0;
`;

export const ImageContainer = styled.div`
    height: 400px;
    width: 100%;
    overflow: hidden;
`;

export const Image = styled.div`
    height: 100%;
    width: 100%;
    background-size: cover; 
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CardTitle = styled.h3`
    font-weight: 600;
`;

export const CardText = styled.p`
    font-weight: 200;
`;

export const Button = styled.button`
    width: 100%;
    height: 40px;
    background: transparent;
    border: 2px solid #324B4E;
    color: #324B4E;
    cursor: pointer;
`;

export const AddToCart = styled.div`
    position: absolute;
    top: 26px;
    right: 26px;
    width: 46px;
    height: 46px;
    border: 2px solid #324B4E;
    background-color: transparent;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #324B4E;
    cursor: pointer;

    &:hover{
        border: 2px solid transparent;
        background-color: #324B4E;
        color: #fff;
        transition: 0.6s;
    }
`;