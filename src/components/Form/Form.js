import React from 'react'
import { Main, Title, ContainerInput, ButtonSubmit } from './Styled'

export default function Form({children, labelButton}) {
    return (
        <Main>
            <Title>Entra</Title>
            <ContainerInput>
                {children}
            </ContainerInput>
            <ButtonSubmit>
                {labelButton}
            </ButtonSubmit>
        </Main>
    )
}
