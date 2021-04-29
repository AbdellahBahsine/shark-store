import styled from 'styled-components';

export const ProductsListContainer = styled.div`
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    position: relative;
    text-transform: uppercase;
    padding: 6px 14px;
    font-weight: 600;

    span:first-child{
        position: absolute;
        bottom: 0;
        right: 0;
        width: 20px;
        border-bottom: 2px solid #3E4756;
    }

    span:last-child{
        position: absolute;
        bottom: 0;
        right: 0;
        height: 20px;
        border-right: 2px solid #3E4756;
    }

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        border-top: 2px solid #3E4756;
    }

    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        border-left: 2px solid #3E4756;
    }
`;