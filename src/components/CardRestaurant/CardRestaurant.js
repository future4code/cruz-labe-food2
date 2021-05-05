import React from "react";
import { useHistory } from 'react-router-dom'
import { Banner, Card, ContainerInfo, Name } from "./Styled";
import { goToRestaurant } from '../../Routes/Coordinators'

export default function CardRestaurant({ restaurant, hasDatails }) {
  const history = useHistory()

  console.log(restaurant);

  return (
    <Card onClick={() => goToRestaurant(history, restaurant.id)} hasDatails={hasDatails}>
      <Banner src={restaurant.logoUrl} />
      <ContainerInfo>
        <Name>{restaurant.name}</Name>
        {hasDatails && <p>{restaurant.category}</p>}
        <div>
          <p>
            {restaurant.deliveryTime - 10} - {restaurant.deliveryTime} min
          </p>
          <p>
            Frete R${parseFloat(restaurant.shipping.toFixed(2)).toLocaleString('pt-BR', {
                currency: 'BRL',
                minimumFractionDigits: 2
            })}
          </p>
        </div>
        {hasDatails && <p>{restaurant.address}</p>}
      </ContainerInfo>
    </Card>
  );
}
