import React, { useContext } from "react";
import FooterMenu from "../FooterMenu/FooterMenu";
import MenuHeader from "../MenuHeader/MenuHeader";
import CardCart from "./CardCart";
import maskMoney from "../../constants/maskMoney";
import {
  Rectangle,
  DivConfirmButton,
  PaymentMethod,
  DivPrice,
  DeliveryAddress,
  CustomerStreet,
  Restaurant,
  RestaurantStreet,
  DeliveryTime,
  Shipping,
  SubtotalPrice,
  Subtotal,
  PaymentOptions,
  RadiobuttonChecked,
  ConfirmButton,
  EmptyText,
  DivRadio,
  Container,
  DivPadding,
} from "./Styled";
import { useRequestData } from "../../hooks/useRequestData";
import GlobalStateContext from "../../global/GlobalStateContext";
import { LinearProgressGlobal } from "../../GlobalStyle";

const ComponentCart = ({
  onChangePaymentMethod,
  onClickConfim,
  paymentMethod,
  loading,
}) => {
  const [profile] = useRequestData("profile", {});
  const { cart, restaurantDetail } = useContext(GlobalStateContext);
  // const [priceToPay, setPriceToPay] = useState(0);

  // let payment = "creditcard";

  // useEffect(() => {
  //   let currentTotal = 0;
  //   cart.forEach((product) => {
  //     currentTotal += product.price * product.quantity;
  //   });
  //   setPriceToPay();
  // });
  
  const calTotalPrice = () => {
    const totalPrice = cart.reduce((acc, item) => {
      return (acc += item.price);
    }, 0)

    if (totalPrice > 0) return totalPrice + restaurantDetail.shipping 
    return 0
  }

  return (
    <Container>
      <MenuHeader currentPageLabel="Meu Carrinho" />
      <Rectangle>
        <DeliveryAddress>Endereço de entrega</DeliveryAddress>
        <CustomerStreet>{profile.user && profile.user.address}</CustomerStreet>
      </Rectangle>

      {restaurantDetail && restaurantDetail.name && (
        <>
          <Restaurant>{restaurantDetail.name}</Restaurant>
          <RestaurantStreet>{restaurantDetail.address}</RestaurantStreet>
          <DeliveryTime>{restaurantDetail.deliveryTime} min</DeliveryTime>
        </>
      )}

      {cart.length > 0 ? (
        cart.map((product) => {
          return <CardCart product={product} />;
        })
      ) : (
        <EmptyText>Carrinho Vazio</EmptyText>
      )}
      <DivPadding>
        {restaurantDetail && (
          <Shipping>
            Frete R$
            {restaurantDetail &&
            restaurantDetail.shipping &&
            restaurantDetail.shipping > 0
              ? maskMoney(restaurantDetail.shipping)
              : "00,00"}
          </Shipping>
        )}
        <DivPrice>
          <Subtotal>SUBTOTAL</Subtotal>
          <SubtotalPrice>
            R$
            {restaurantDetail &&
            restaurantDetail.shipping &&
              calTotalPrice() > 0 ? maskMoney(calTotalPrice()) : "00,00"}
          </SubtotalPrice>
        </DivPrice>
        <PaymentMethod>
          Pagamento
          <hr />
        </PaymentMethod>
        <PaymentOptions>
          <DivRadio>
            <RadiobuttonChecked
              name="teste"
              type="radio"
              onClick={() => onChangePaymentMethod("money")}
              value="money"
              checked={paymentMethod === "money"}
            />
          </DivRadio>
          Dinheiro
        </PaymentOptions>

        <PaymentOptions>
          <DivRadio>
            <RadiobuttonChecked
              name="teste"
              type="radio"
              onClick={() => onChangePaymentMethod("creditcard")}
              value="creditcard"
              checked={paymentMethod === "creditcard"}
            />
          </DivRadio>
          Cartão
        </PaymentOptions>

        <DivConfirmButton onClick={onClickConfim}>
          {loading && <LinearProgressGlobal />}
          <ConfirmButton>Confirma</ConfirmButton>
        </DivConfirmButton>
      </DivPadding>
      <FooterMenu currentPage="Cart" />
    </Container>
  );
};

export default ComponentCart;
