import React from "react";
import { useHistory } from "react-router-dom";
import { Banner, Card, ContainerInfo, Name } from "./Styled";
import { goToRestaurant } from "../../Routes/Coordinators";
import maskMoney from "../../constants/maskMoney";
export default function CardRestaurant({
  restaurant,
  hasDatails,
  classCardDetails,
}) {
  const history = useHistory();

  return (
    <Card
      className={classCardDetails}
      onClick={() => goToRestaurant(history, restaurant.id)}
      hasDatails={hasDatails}
    >
      <Banner src={restaurant.logoUrl} />
      <ContainerInfo>
        <Name>{restaurant.name}</Name>
        {hasDatails && <p>{restaurant.category}</p>}
        <div>
          <p>
            {restaurant.deliveryTime - 10} - {restaurant.deliveryTime} min
          </p>
          <p>Frete R${maskMoney(restaurant.shipping)}</p>
        </div>
        {hasDatails && <p>{restaurant.address}</p>}
      </ContainerInfo>
    </Card>
  );
}
