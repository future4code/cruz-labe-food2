import React from 'react'
import {CategoryContainer} from './Styled'

export default function MenuCategory ({categorys, selectCategory, currentCategoty}) {
    return (   
        <CategoryContainer>
            {categorys.map((category) => {
                return <p className={currentCategoty === category && 'selected'} key={category} onClick={() => selectCategory(category)}>{category}</p>
            })}
        </CategoryContainer>
    )
}