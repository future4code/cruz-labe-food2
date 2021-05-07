import React, { useContext, useEffect, useState } from "react";
import MenuHeader from "../components/MenuHeader/MenuHeader";
import MainContainer from "../components/MainContainer/MainContainer";
import CardRestaurant from "../components/CardRestaurant/CardRestaurant";
import { useRequestData } from "../hooks/useRequestData";
import { useParams } from "react-router-dom";
import SectionDetails from "../components/SectionDetails/SectionDetails";
import CardCart from "../components/CardCart/CardCart";
import { ContactsOutlined, SettingsApplicationsRounded } from "@material-ui/icons";
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
    const products = restaurant.products.map((item) => {
      if (item.id === newItem.id) {
        item.quantity = quantity
      }
      return item 
    })
    setRestaurant({...restaurant, products})
    console.log(newCart)
    console.log(cart)
    localStorage.setItem('restaurant', JSON.stringify(restaurant))
  }

  const removeItemToCart = (itemToRemove) => {
    let newCart = cart.filter((item) => {
      return item.id !== itemToRemove.id
    })
    setCart(newCart)
    const products = restaurant.products.map((item) => {
      if (item.id === itemToRemove.id) {
        item.quantity = 0
      }
      return item 
    })
    setRestaurant({...restaurant, products})
    console.log(itemToRemove)
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

  // const updateProductsQuantity = () => {
  //   const products = quantityProduct(restaurant.products) 

  // }

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
                  removeItemToCart={removeItemToCart}
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
