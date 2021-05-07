import styled from 'styled-components';

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 110px 0;
`;

export const SignInContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    padding: 10px 0;
    width: 350px;
    margin: 0 auto;
    border: 2px solid #324B4E;

    @media screen and (max-width: 1030px){
        width: 320px;
    }

    @media screen and (max-width: 360px){
        width: 90%;
    }
`;

export const SignInIconContainer = styled.div`
    position: absolute;
    top: -25px;
    right: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    border: 2px solid #324B4E;
    border-radius: 50%;
    background: #fff;
`;

export const SignInIcon = styled.i`
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    color: #324B4E;
`; 

export const Title = styled.h2`
    color: #324B4E;
    margin-top: 30px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 20px 20px 20px;
    width: 100%;
`;

export const Input = styled.input`
    width: 100%;
    height: 36px;
    margin: 0 auto 16px auto;
    border: 1px solid #324B4E;
    padding: 6px;
`;

export const Button = styled.button`
    width: 100%;
    height: 36px;
    margin: 0 auto;
    background: #324B4E;
    border: 0;
    outline: none;
    color: #fff;
    cursor: pointer;

    &:hover{
        background: #253c3f;
        transition: 0.8s;
    }
`;