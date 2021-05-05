import React, { useEffect, useState } from "react";
import MenuHeader from "../components/MenuHeader/MenuHeader";
import MainContainer from "../components/MainContainer/MainContainer";
import CardRestaurant from "../components/CardRestaurant/CardRestaurant";
import { useRequestData } from "../hooks/useRequestData";
import { useParams } from "react-router-dom";
import SectionDetails from "../components/SectionDetails/SectionDetails";
import CardCart from "../components/CardCart/CardCart";

const RestaurantPage = () => {
  // useProtectedPage()
  const params = useParams();
  const [data, updateData] = useRequestData(
    `restaurants/${params.restaurantId}`,
    {}
  );
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    setRestaurant(data.restaurant);
  }, [data]);

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
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.photoUrl}
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
