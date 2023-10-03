import styled from "styled-components";
import { endpoints } from "../../styles/GlobalStyles";

export const Container = styled.header`
    margin-bottom: 2rem;

    @media screen and (max-width: ${ endpoints.mobile }) {
        margin-bottom: 0;
    }
`

export const Title = styled.h1`
    font-size: 4rem;
    margin-bottom: 1rem;

    @media screen and (max-width: ${ endpoints.mobile }) {
        font-size: 3rem;
    }
`

export const Text = styled.p``
