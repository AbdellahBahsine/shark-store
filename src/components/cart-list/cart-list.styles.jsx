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
    flex-direction: column;
    align-items: center;

    @media all and (max-width: 1080px){
        right: -300px;
        width: 300px;
    }

    @media all and (max-width: 750px){
        position: absolute;
        top: -100%;
        z-index: 2;
        right: 5% !important;
        margin: 0 auto;
        height: 100%;
        width: 90%;
        border: 1px solid #324B4E;
    }
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
