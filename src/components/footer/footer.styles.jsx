import styled from 'styled-components';

export const FooterContainer = styled.footer`
    padding: 0 5%;
    background: #006D75;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    @media screen and (max-width: 612px){
        flex-direction: column;
        padding: 10px 0;
    }
`;

export const Credit = styled.p`
    text-transform: uppercase;

    a{
        color: #324B4E;
        text-decoration: none;
    }

    @media screen and (max-width: 612px){
        order: 2;
    }
`;