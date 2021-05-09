import React from "react";
import {
  MainFooter,
  NameRestaurant,
  Title,
  Subtotal,
  IconClock,
  DivInformation,
  DivIcon,
} from "./Styled";
import clock from "../../assets/clock.svg";
import maskMoney from "../../constants/maskMoney";
const CardOrderInProgress = ({ name, subtotal }) => {
  return (
    <MainFooter>
      <DivIcon>
        <IconClock src={clock} />
      </DivIcon>
      <DivInformation>
        <Title>Pedido em andamento</Title>
        <NameRestaurant>{name}</NameRestaurant>
        <Subtotal>Sub Total: R${maskMoney(subtotal)}</Subtotal>
      </DivInformation>
    </MainFooter>
  );
};

export default CardOrderInProgress;
