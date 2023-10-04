import styled from "styled-components";
import { colors, endpoints } from "../../styles/GlobalStyles";

export const Container = styled.li`
    padding: 1.5rem 1rem;
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    background-color: rgba(0,0,0, .4);
    border-radius: 1rem;

    position: relative;

    &.hasDone {
        /* pointer-events: none; */
        opacity: .2;
        user-select: none;

        input, button.edit {
            pointer-events: none;
        }

        input {
            text-decoration: line-through;
        }
    }

    &:hover {
        div {
            opacity: 1;
        }
    }

    @media (max-width: ${ endpoints.mobile }) {
        input {
            width: 100%;
        }
    }
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    position: relative;

    small {
        position: absolute;
        color: #d5d5d5;
        transform: translateY(100%);
        bottom: 0;
        left: 0;
    }

    @media (max-width: ${ endpoints.mobile }) {
        small {
            bottom: auto;
            top: 0;
            transform: translateY(-100%);
            width: 160%;
        }
    }
`

export const Text = styled.input`
    font-size: 1rem;
    color: #fff;
    background: none;
    border: none;
    padding: .5rem;
    padding-left: 0;
    /* outline: none; */
    flex: 1;

    &::placeholder {
        color: #fff;
    }
`

export const ButtonsArea = styled.div`
    display: flex;
    flex-direction: column;
    opacity: 0;
    gap: .5rem;
    transition: opacity .2s linear;

    @media (max-width: ${ endpoints.mobile }) {
        flex-direction: row;
        p { display: none }
    }
`

export const Button = styled.button`
    padding: .35rem;
    border-radius: .5rem;
    border: 1px solid transparent;
    font-weight: 700;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    transition: .2s linear;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;

    &.conclude {
        background-color: ${ colors.orange };
        &:hover {
            color:  ${ colors.orange };
        }
    }
    &.remove {
        background-color: ${ colors.red };
        &:hover {
            color: ${ colors.red };
        }
    }
    &.edit {
        background-color: gray;
        &.inative { display: none }
        &:hover {
            color: gray;
        }
    }
    &:hover {
        background-color: white;
    }
`

export const DateText = styled.small`
    position: absolute;
    bottom: .2rem;
    right: 1rem;
`