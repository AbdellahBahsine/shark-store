import styled from 'styled-components';

export const CartContainer = styled.div`
    height: 150px;
    display: flex;
    margin: 15px 0;
`;

export const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`;

export const Image = styled.div`
    height: 100%;
    width: 40%;
    background-size: cover;
    background-position: center;
    border: 2px solid #3E4756;
    border-radius: 5px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const TextContainer = styled.div`
    height: 100%;
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Title = styled.h3`
    font-size: 16px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Price = styled.p`
    font-size: 16px;
`;

export const Quantity = styled.p`
    font-size: 16px;
`;