import React from 'react'
import {CategoryContainer} from './Styled'

export default function MenuCategory ({categorys}) {
    return (   
        <CategoryContainer>
            {categorys.map((category) => {
                return <p>{category}</p>
            })}
        </CategoryContainer>
    )
}