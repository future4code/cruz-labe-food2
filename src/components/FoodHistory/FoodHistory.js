import React from "react";
import { HistoryContainer, Restaurants, Date, Subtotal } from "./Styled";
import maskDate from "../../constants/maskDate";
import maskMoney from "../../constants/maskMoney";
const FoodHistory = ({ title, date, subtotal }) => {
  return (
    <HistoryContainer>
      <Restaurants>{title}</Restaurants>
      <Date>{maskDate(date)}</Date>
      <Subtotal>subtotal: R$ {maskMoney(subtotal)}</Subtotal>
    </HistoryContainer>
  );
};

export default FoodHistory;
