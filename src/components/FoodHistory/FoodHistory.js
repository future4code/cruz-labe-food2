import React from 'react';
import {HistoryContainer, Restaurants, Date, Subtotal} from './Styled';

const FoodHistory = ({title, date, subtotal}) => {
  return (
    <HistoryContainer>
      <Restaurants>
        {title}
      </Restaurants>
      <Date>
        {date}
      </Date>
      <Subtotal>
      {subtotal}
      </Subtotal>
    </HistoryContainer>
  )

}

export default FoodHistory;