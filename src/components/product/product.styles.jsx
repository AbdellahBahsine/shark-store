import styled from 'styled-components';

export const ProductContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 60px;
    margin: 40px 0;

    div:nth-child(1) div:nth-child(1){
        background-image: url(https://i.ibb.co/t3p958r/brown-suit-jacket.jpg);
    }

    div:nth-child(2) div:nth-child(1){
        background-image: url(https://i.ibb.co/myC2WyS/long-sleeve.jpg);
        background-position: top center;
    }

    div:nth-child(3) div:nth-child(1){
        background-image: url(https://i.ibb.co/nsVCcwN/floral-spaghetti-strap.jpg);
    }

    div:nth-child(4) div:nth-child(1){
        background-image: url(https://i.ibb.co/BjbzJJT/white-nike.jpg);
    }

    div:nth-child(5) div:nth-child(1){
        background-image: url(https://i.ibb.co/gFjJxyj/denim-jacket.jpg);
    }

    div:nth-child(6) div:nth-child(1){
        background-image: url(https://i.ibb.co/RPH5C5J/air-jordan.jpg);
    }
`;

export const Card = styled.div`
    position: relative;
    flex: 1;
    height: 400px;
`;

export const ImageContainer = styled.div`
    height: 80%;
    width: 100%;
    overflow: hidden;
`;

export const Image = styled.div`
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    border-radius: 5px 5px 0 0;

    &:hover{
        transform: scale(1.1);
        transition: 2s;
    }
`;

export const CardTitle = styled.h3`
    margin: 14px 0 6px 0;
    font-weight: 600;
`;

export const CardText = styled.p`
    margin: 6px 0;
    font-weight: 200;
`;

export const AddToCart = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 46px;
    height: 46px;
    background-color: #3E4756;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
`;