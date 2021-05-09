import React, { useContext, useState } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import Dialog from "../../components/Dialog/Dialog";
import maskMoney from "../../constants/maskMoney";

import {
  DivDetails,
  RemoveButton,
  AddButton,
  ItemCard,
  Card,
  ImageDiv,
  ItemName,
  DetailsOrder,
  Price,
  TextButton,
  Quantity,
  Number,
  DivFunctionalities,
} from "./Styled";

const CardCart = ({ product, restaurant }) => {
  const [openDialog, setOpenDialog] = useState();
  const { cart, setCart, restaurantDetail, setRestaurantDetail } = useContext(
    GlobalStateContext
  );

  const addItemCart = (quantity) => {
    if (
      !restaurantDetail ||
      !restaurantDetail.id ||
      restaurant.id !== restaurantDetail.id
    ) {
      setRestaurantDetail(restaurant);
      setCart([{ ...product, quantity }]);
    } else {
      if (quantity > 0) {
        setCart([...cart, { ...product, quantity }]);
      }
    }
  };
  const removeItemCart = () => {
    const index = cart.findIndex((cartProduct) => {
      return cartProduct.id === product.id;
    });
    if (index > -1) {
      const cartRemoveItem = [...cart];
      cartRemoveItem.splice(index, 1);
      setCart(cartRemoveItem);
    }
  };
  return (
    <ItemCard>
      {product && (
        <Card>
          <ImageDiv>
            <img src={product.photoUrl} alt={product.name} />
          </ImageDiv>

          <DivDetails>
            <ItemName>{product.name}</ItemName>
            <DetailsOrder>{product.description}</DetailsOrder>
            <Price>R${maskMoney(product.price)}</Price>
          </DivDetails>

          <DivFunctionalities>
            {product.quantity > 0 && (
              <Quantity>
                <Number>{product.quantity}</Number>
              </Quantity>
            )}

            {product.quantity && product.quantity > 0 ? (
              <RemoveButton onClick={removeItemCart}>
                <TextButton>Remover</TextButton>
              </RemoveButton>
            ) : (
              <AddButton onClick={() => setOpenDialog(true)}>
                <TextButton>Adicionar</TextButton>
              </AddButton>
            )}
            {
              <Dialog
                open={openDialog}
                setOpen={setOpenDialog}
                id={product.id}
                addItemCart={addItemCart}
              />
            }
          </DivFunctionalities>
        </Card>
      )}
    </ItemCard>
  );
};

export default CardCart;
