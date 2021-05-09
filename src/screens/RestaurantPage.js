import React, { useContext, useEffect, useState } from "react";
import MenuHeader from "../components/MenuHeader/MenuHeader";
import MainContainer from "../components/MainContainer/MainContainer";
import CardRestaurant from "../components/CardRestaurant/CardRestaurant";
import { useRequestData } from "../hooks/useRequestData";
import { useParams } from "react-router-dom";
import SectionDetails from "../components/SectionDetails/SectionDetails";
import CardCart from "../components/CardCart/CardCart";
import GlobalStateContext from "../global/GlobalStateContext";
import useProtectedPage from "../hooks/useProtectedPage";

const RestaurantPage = () => {
  useProtectedPage();
  const params = useParams();
  const { cart } = useContext(GlobalStateContext);
  const [product, setProduct] = useState([]);
  const [data] = useRequestData(`restaurants/${params.restaurantId}`, {});
  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
    if (data && data.restaurant) {
      setRestaurant(data.restaurant);
    }
  }, [data]);

  const updateProduct = (pro) => {
    const productsCurrent = pro.map((productCurrent) => {
      const index = cart.findIndex((cartProduct) => {
        return cartProduct.id === productCurrent.id;
      });
      if (index > -1) {
        const productQuantity = {
          ...productCurrent,
          quantity: cart[index].quantity,
        };

        return productQuantity;
      } else {
        const productQuantity = { ...productCurrent, quantity: 0 };
        return productQuantity;
      }
    });
    setProduct(productsCurrent);
  };

  useEffect(() => {
    if (data.restaurant && data.restaurant.products) {
      updateProduct(data.restaurant.products);
    }
  }, [data]);
  useEffect(() => {
    if (product) {
      updateProduct(product);
    }
  }, [cart]);

  return (
    <>
      <MenuHeader isGoBack currentPageLabel="Restaurante" />
      <MainContainer>
        {restaurant && restaurant.name && (
          <CardRestaurant
            classCardDetails="classCardDetails"
            hasDatails
            restaurant={restaurant}
          />
        )}
        <SectionDetails labelTitle="Principais">
          {product &&
            product.map((product) => {
              return <CardCart product={product} restaurant={restaurant} />;
            })}
          <CardCart />
        </SectionDetails>
      </MainContainer>
    </>
  );
};

export default RestaurantPage;
