import styled from 'styled-components';

export const CheckoutContainer = styled.div`
    display: flex;
    padding: 0 5%;
`;

export const ShoppingCart = styled.div`
    width: 100%;
    margin: 15px 0 40px 0;
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
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
`;

export const Quantity = styled.h3`
    width: 25%;
`;

export const TotalPrice = styled.h3`
    width: 25%;
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
    background-image: ${({imageUrl}) => `url(${imageUrl})`}
`;

export const ProductName = styled.h3`
    font-size: 20px;
    margin-left: 15px;
    align-self: center;
`;

export const QuantityNumber = styled.p`
    width: 25%;
    font-size: 16px;
    padding-left: 16px;

    i{
        cursor: pointer;
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
    background: #FAFAFA;
    padding: 10px 28px;
`;

export const PayemntInfoTitle = styled.h3`
    border-bottom: 1px solid #cacaca;
    padding-bottom: 15px;
`;

export const PaymentTotalPrice =styled.p`
    border-top: 1px solid #cacaca;
    padding-top: 15px;
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