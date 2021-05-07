import styled from 'styled-components';

export const FooterContainer = styled.footer`
    padding: 0 5%;
    background: #006D75;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;

    @media screen and (max-width: 612px){
        flex-direction: column;
    }
`;

export const Socials = styled.div`
    display: flex;
`;

export const Social = styled.div`
    margin-left: 20px;
    width: 30px;
    height: 30px;
    border: 2px solid #94B0B3;
    color: #94B0B3;
    display: flex;
    justify-content: center;
    align-items: center;
`;