import React from 'react'
import { Banner, Card } from './Styled'

export default function CardRestaurant({restaurant}) {
    console.log(restaurant)

    return (
        <Card>
            <Banner src={restaurant.logoUrl}/>
        </Card>
    )
}
