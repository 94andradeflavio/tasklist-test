import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Form = styled.form`
    padding: 1.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-top: 1px solid white;
`

export const Input = styled.input`
    background-color: rgba(0,0,0,.6);
    padding: .5rem;
    border: none;
    border-radius: .5rem;
    flex: 1;
`

export const InputButton = styled.button`
    background-color: ${ colors.green };
    color: #fff;
    border-radius: .5rem;
    border: none;
    padding: .5rem;
    font-weight: 700;
    transition: .2s linear;

    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: ${ colors.green };
    }
`