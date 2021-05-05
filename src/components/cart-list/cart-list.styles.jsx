import styled from 'styled-components';

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    right: -400px;
    z-index: 5;
    height: 100vh;
    width: 400px;
    background: #fff;
    border-left: 1px solid #324B4E;
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
    background: #324B4E;
    color: #fff;
    border: 0;
    outline: none;
    text-transform: uppercase;
    cursor: pointer;

    &:hover{
        background: #253c3f;
        transition: 0.8s;
    }
`;