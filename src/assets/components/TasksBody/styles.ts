import styled from "styled-components";
import { endpoints } from "../../styles/GlobalStyles";

export const Container = styled.div`
    padding: 0;
    width: 100%;
    /* border: 2px solid white; */
    /* border-radius: 2rem; */
    flex: 1;
    overflow-y: scroll;
`

export const Text = styled.p``

export const ReportArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    @media (max-width: ${ endpoints.mobile }) {
        flex-direction: column;
        gap: 1rem;
    }
`

export const FilterArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 1rem;

    select {
        outline: none;
    }

    @media (max-width: ${ endpoints.mobile }) {
        width: 100%;
    }
`

export const SelectArea = styled.div`
    display: flex;
    align-items: center;
    gap: .4rem;
`