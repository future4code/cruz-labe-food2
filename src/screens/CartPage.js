import React, { useContext, useState } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import ComponentCart from "../components/CardCart/ComponentCart";
import { placeOrder } from "../services/API";
import Snackbar from "../components/Snakbar/Snakbar";
import useProtectedPage from "../hooks/useProtectedPage";

const CartPage = () => {
  useProtectedPage();
  const { cart, setCart, restaurantDetail, setRestaurantDetail } = useContext(
    GlobalStateContext
  );
  const [paymentMethod, setPaymentMethod] = useState("creditcard");
  const [snack, setSnack] = useState({ text: "", sucess: false });
  const [loading, setLoading] = useState(false);

  const onChangePaymentMethod = (value) => {
    setPaymentMethod(value);
  };
  const onClickConfim = () => {
    const products = cart.map((productCart) => {
      const product = {
        id: productCart.id,
        quantity: productCart.quantity,
      };
      return product;
    });
    placeOrder(
      products,
      paymentMethod,
      restaurantDetail.id,
      setCart,
      setRestaurantDetail,
      setSnack,
      setLoading
    );
  };
  return (
    <div>
      <ComponentCart
        onClickConfim={onClickConfim}
        onChangePaymentMethod={onChangePaymentMethod}
        paymentMethod={paymentMethod}
        loading={loading}
      />
      {snack.text && <Snackbar text={snack.text} sucess={snack.sucess} />}
    </div>
  );
};

export default CartPage;
