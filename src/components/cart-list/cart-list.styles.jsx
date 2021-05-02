import styled from 'styled-components';

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    right: -100%;
    z-index: 5;
    height: 100vh;
    width: 400px;
    background: #fff;
    border-left: 1px solid #333;
    display: flex;
    justify-content: center;
`;

export const CartListContainer = styled.div`
    height: 89%;
    width: 100%;
    display: flex; 
    flex-direction: column;
    color: black;
    overflow-y: auto;
    padding: 15px;
`;

export const Button = styled.button`
    position: absolute;
    bottom: 15px;
    width: 375px;
    height: 40px;
    margin: 0 auto;
    background: #3E4756;
    color: #fff;
    border: 0;
    border-radius: 5px;
    text-transform: uppercase;
`;