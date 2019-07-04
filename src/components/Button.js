import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.2rem;
    background: transparent;
    border: 0.1rem solid var(--LightBlue);
    border-color:${props => props.cart ? 'var(--mainYellow)' : 'var(--LightBlue)'};
    color:${props => props.cart ? 'var(--mainYellow)' : 'var(--LightBlue)' };
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor:pointer;
    margin: 0.2rem 0.5rem 0;
    transition: all 0.2s ease-in-out;
    &:hover{
        background:${props => props.cart ? 'var(--mainYellow)' : 'var(--LightBlue)' };
        color: #fff ;
    }
    &:focus{
        outline: none;
    }
`