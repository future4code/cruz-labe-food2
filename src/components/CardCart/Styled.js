import styled from "styled-components";

export const Title = styled.h4`
  width: 5.688rem;
  height: 1.188rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
`;

export const Carrinho = styled.div`
  width: 100% /*22.5rem*/;
  height: 48.813rem;
`;

export const Rectangle = styled.div`
  width: 100% /*22.5rem*/;
  height: 4.75rem;
  margin: 0.063rem 0 1rem;
  padding: 1rem;
  background-color: #eeeeee;
`;

export const Bar = styled.div`
  width: 100% /*22.5rem*/;
  height: 4rem;
  margin: 0 0 0.063rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
`;

export const DeliveryAddress = styled.div`
  width: 100% /*20.5rem*/;
  height: 1.125rem;
  margin: 0 0 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`;

export const CustomerStreet = styled.div`
  width: 100% /*20.5rem*/;
  height: 1.125rem;
  margin: 0.5rem 0 0;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`;

export const Restaurant = styled.div`
  width: 100% /*20.5rem*/;
  height: 1.125rem;
  margin: 1rem 1rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e8222e;
`;

export const RestaurantStreet = styled.div`
  width: 100% /*20.5rem*/;
  height: 1.125rem;
  margin: 0.5rem 1rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`;

export const DeliveryTime = styled.div`
  width: 100% /*20.5rem*/;
  height: 1.125rem;
  margin: 0.5rem 1rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`;

export const ItemCard = styled.div`
  width: 100% /*20.5rem*/;
  height: 7.5rem;
  margin: 0.5rem 0 0;
  padding: 0.5rem 0rem 0;
`;

export const Card = styled.div`
  width: 100% /*20.5rem*/;
  min-height: 7rem;
  height: 7rem;
  max-height: 7rem;
  max-height: 7rem;
  box-sizing: border-box;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  display: flex;
  position: relative;
`;

export const ImageDiv = styled.div`
  min-width: 6rem;
  max-width: 6rem;
  min-height: 7rem;

  img {
    width: 100%;
    height: 98%;
    border-radius: 8px 0 0 8px;
  }
`;

export const ItemName = styled.div`
  /* width: 10.438rem; */
  width: 78%;
  height: 1.125rem;
  margin: 1.125rem 1rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #e8222e;
`;

export const DetailsOrder = styled.div`
  width: 12.5rem;
  width: 100%;
  max-height: 1.875rem;
  margin: 0.5rem 1rem;
  font-family: Roboto;
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`;
export const Price = styled.div`
  width: 7.375rem;
  height: 1.188rem;
  margin: 0.25rem 0.5rem 0.938rem 1rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`;

export const DivDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RemoveButton = styled.div`
  width: 5.625rem;
  height: 1.938rem;
  margin: /*0.438rem*/ 2.2rem 0 0 0.5rem /*0.5rem*/;
  padding: 0.5rem 1.438rem 0.563rem 1.5rem;
  border-radius: 8px 0 8px 0;
  border: solid 1px #e02020;
  cursor: pointer;
`;
export const TextButton = styled.h1`
  width: 2.688rem;
  height: 0.875rem;
  font-family: Roboto;
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  text-align: center;
  color: #e02020;
`;
export const AddButton = styled(RemoveButton)`
  border: solid 1px black;
  > h1 {
    color: black;
  }
`;
export const Quantity = styled.div`
  width: 2.063rem;
  height: 2.063rem;
  margin: 0 0 0.688rem 4.05rem /*1rem*/;
  padding: 0.438rem 0.75rem;
  border-radius: 0 8px 0 8px;
  border: solid 1px #e8222e;
`;

export const Number = styled.div`
  width: 0.563rem;
  height: 1.188rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #e8222e;
`;

export const DivFunctionalities = styled.div`
  display: flex;
  min-height: 7rem;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 0;
  padding-bottom: 1px;
`;

export const Shipping = styled.div`
  width: 100%;
  height: 1.125rem;
  margin: 1rem 1rem 0rem 0rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: right;
  color: var(--black);
`;

export const SubtotalPrice = styled.div`
  width: /*10.25rem*/ 100%;
  height: 1.313rem;
  margin: 0.813rem 0;
  font-family: Roboto;
  font-size: 1.125rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.43px;
  text-align: right;
  color: #e8222e;
`;

export const Subtotal = styled.div`
  width: /*10.25rem*/ 100%;
  height: 1.125rem;
  margin: 0.938rem 0 1.563rem 1rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`;

export const DivPrice = styled.div`
  display: flex;
`;

export const PaymentMethod = styled.h2`
  width: 100% /*20.5rem*/;
  height: 1.125rem;
  margin-top: 1.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
  padding-bottom: 1.7rem;
  border-bottom: 1px solid #000000;
`;

export const PaymentOptions = styled.div`
  width: 18.5rem;
  height: /*1.125rem*/ 2rem;
  margin: 0.688rem 1rem 0.688rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
  display: flex;
  align-items: center;
`;

export const DivRadio = styled.div`
  margin-top: 0.5rem;
`;

export const RadiobuttonChecked = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.5rem 0.5rem 1rem 0rem;
  border: 2px solid #000000;
  border-radius: 50%;
  outline: none;
`;

export const DivConfirmButton = styled.div`
  width: 100%;
  margin-top: 1.188rem;

  .disable {
    background-color: rgba(232, 34, 46, 0.5);
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

export const ConfirmButton = styled.button`
  border-radius: 2px;
  width: 100% /*18.5rem*/;
  height: 2.625rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
  background-color: #e8222e;
  border: none;
  cursor: pointer;
`;

export const EmptyText = styled.div`
  width: 100%;
  height: 1.125rem;
  opacity: 0.89;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
  padding: 0.75rem 0;
  margin-bottom: 2rem;
`;

export const Container = styled.div`
  width: 100%;
  margin-bottom: 3.062rem;
`;
export const DivPadding = styled.div`
  width: 100%;
  padding: 1rem;
`;
