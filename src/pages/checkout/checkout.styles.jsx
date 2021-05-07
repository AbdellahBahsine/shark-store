import styled from 'styled-components';

export const CheckoutContainer = styled.div`
    display: flex;
    padding: 0 5%;
`;

export const ShoppingCart = styled.div`
    width: 100%;
    margin: 15px 0 40px 0;
`;

export const Title = styled.h3`
    font-family: 'Merriweather', serif;
    font-size: 20px;
    text-transform: uppercase;
`;

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;

    @media all and (max-width: 1080px){
        flex-direction: column;
    }
`;

export const CartItemsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-right: 25px;
`;  

export const Header = styled.div`
    display: flex;
    border-bottom: 1px solid #324B4E;
`;

export const Product = styled.h3`
    width: 50%;

    @media all and (max-width: 440px){
        font-size: 16px;
    }
`;

export const Quantity = styled.h3`
    width: 25%;

    @media all and (max-width: 440px){
        font-size: 16px;
    }
`;

export const TotalPrice = styled.h3`
    width: 25%;

    @media all and (max-width: 440px){
        font-size: 16px;
    }
`;

export const CartItems = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 0;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

export const ProductNameContainer = styled.div`
    width: 50%;
    height: 80px;
    display: flex;
`;

export const Image = styled.div`
    height: 100%;
    width: 26%;
    background-size: cover;
    background-position: center;
    border: 2px solid #3E4756;
    border-radius: 5px;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};

    @media all and (max-width: 800px){
        display: none;
    }
`;

export const ProductName = styled.h3`
    font-size: 20px;
    margin-left: 15px;
    align-self: center;

    @media all and (max-width: 800px){
        margin-left: 0;
    }

    @media all and (max-width: 440px){
        font-size: 16px;
    }
`;

export const QuantityNumber = styled.p`
    width: 25%;
    font-size: 14px;
    padding-left: 16px;
    display: flex;

    i{
        cursor: pointer;
        background: #94B0B3;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        border-radius: 2px;
    }

    span{
        font-size: 16px;
        padding: 0 6px;
    }
`;

export const TotalPriceNumber = styled.p`
    width: 25%;
    font-size: 20px;
    padding-left: 32px;
`;

export const BackToShopping = styled.span`
    color: #324B4E;
    border-bottom: 1px solid #324B4E;
    align-self: flex-start;
    padding-bottom: 4px;
    cursor: pointer;
`;

export const PaymentInfo = styled.div`
    width: 30%;
    height: auto;
    background: #FAFAFA;
    padding: 10px 28px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    @media all and (max-width: 1080px){
        width: 100%;
        margin-top: 30px;
    }
`;

export const Note = styled.p`
    color: #b33a3a;
    text-transform: uppercase;
`

export const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.button`
    width: 100%;
    height: 40px;
    margin: 0 auto;
    background: #324B4E;
    border: 0;
    outline: 0;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;

    &:hover{
        background: #253c3f;
        transition: 0.8s;
    }
`;