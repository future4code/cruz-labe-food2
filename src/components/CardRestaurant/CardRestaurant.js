import React from "react";
import { Banner, Card, ContainerInfo, Name } from "./Styled";

export default function CardRestaurant({ restaurant }) {
  console.log(restaurant);

  return (
    <Card>
      <Banner src={restaurant.logoUrl} />
      <ContainerInfo>
        <Name>{restaurant.name}</Name>
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
      </ContainerInfo>
    </Card>
  );
}
