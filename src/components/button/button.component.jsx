import styled from 'styled-components';

const Button = styled.button`
    width: 90%;
    height: 40px;
    margin: 0 auto;
    color: #fff;
    background: #324B4E;
    border: none;
    outline: none;
    text-transform: uppercase;
    cursor: pointer;

    &:hover{
        background: #253c3f;
        transition: 0.8s;
    }
`;

const CustomButton = ({children}) => {
    return <button>{children}</button>
}

export default Button;