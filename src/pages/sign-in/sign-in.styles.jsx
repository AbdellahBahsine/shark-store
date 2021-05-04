import styled from 'styled-components';

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    height: 100%;
    margin: 20px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    width: 300px;
    height: 36px;
    margin-bottom: 10px;
    border-radius: 2px;
    border: 1px solid #333;
    padding: 6px;
`;

export const Button = styled.button`
    width: 300px;
    height: 36px;
    border-radius: 2px;
    background: #3E4756;
    border: 0;
    color: #fff;
`;