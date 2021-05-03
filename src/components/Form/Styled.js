import styled from 'styled-components'

export const Main = styled.form`
    width: 100%;
    border: 1px solid black;
    padding: 4px;
    box-sizing: border-box;
`

export const Title = styled.h1`
    text-align: center;
    width: 100%;
    letter-spacing: -0.39px;
    padding: 0.75rem 0;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
`

export const ContainerInput = styled.div`
    width: 100%;

    display: flex;
    flex-wrap: wrap;

    div {
        width: 100%;
        border-radius: 2px;
    }

    > div {
        margin: 6px 0;
    }
    
    input {
        width: 100%;
        /* height: 3.5rem;
        margin: 0.5rem 0 0;
        padding: 1.188rem 3rem 1.188rem 1rem;
        border-radius: 2px;
        border: solid 1px #b8b8b8; */
    }
`

export const ButtonSubmit = styled.button`
    width: 100%;
    margin-top: 10px;
    padding: 0.75rem 0;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    background-color: #e8222e;
    border: none;
    border-radius: 2px;
`