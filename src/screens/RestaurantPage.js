import React, { useContext, useEffect, useState } from "react";
import MenuHeader from "../components/MenuHeader/MenuHeader";
import MainContainer from "../components/MainContainer/MainContainer";
import CardRestaurant from "../components/CardRestaurant/CardRestaurant";
import { useRequestData } from "../hooks/useRequestData";
import { useParams } from "react-router-dom";
import SectionDetails from "../components/SectionDetails/SectionDetails";
import CardCart from "../components/CardCart/CardCart";
import { SettingsApplicationsRounded } from "@material-ui/icons";
import GlobalStateContext from "../global/GlobalStateContext";

const RestaurantPage = () => {
  // useProtectedPage()
  const { cart, setCart } = useContext(GlobalStateContext)
  const params = useParams();
  const [data, updateData] = useRequestData(
    `restaurants/${params.restaurantId}`,
    {}
  );
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    let products =  data.restaurant && quantityProduct(data.restaurant.products)
    setRestaurant({...data.restaurant, products});
  }, [data]);

  const addItemToCart = (newItem, quantity) => {
    const index = cart.findIndex((i) => i.id === newItem.id)
    let newCart = [...cart]
    if (index === -1) {
      newCart.push({ ...newItem, quantity})
    } else {
      newCart[index].quantity = quantity 
    }
    setCart(newCart)
    console.log(newCart)
    console.log(cart)
  }

  const quantityProduct = (products) => {
    if (cart.length > 0) {
      for (let product of products) {
        for (let item of cart) {
          if (product.id === item.id) {
            product.quantity = item.quantity
          }
        }
      } return products
    } else {
      return products
    }
  }

  return (
    <>
      <MenuHeader isGoBack currentPageLabel="Restaurante" />
      <MainContainer>
        {restaurant && restaurant.name && (
          <CardRestaurant hasDatails restaurant={restaurant} />
        )}
        <SectionDetails labelTitle="Principais">
          {restaurant &&
            restaurant.products &&
            restaurant.products.length > 0 &&
            restaurant.products.map((product) => {
              return (
                <CardCart
                  product={product}                 
                  addItemToCart={addItemToCart}
                />
              );
            })}
          <CardCart />
        </SectionDetails>
      </MainContainer>
      <div>Detalhe Resturante</div>
    </>
  );
};

export default RestaurantPage;
