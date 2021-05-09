import React, { useState, useEffect } from "react";
import MenuHeader from "../components/MenuHeader/MenuHeader";
import InputSearch from "../components/InputSearch/InputSearch";
import MainContainer from "../components/MainContainer/MainContainer";
import useProtectedPage from "../hooks/useProtectedPage";
import { useRequestData } from "../hooks/useRequestData";
import CardRestaurant from "../components/CardRestaurant/CardRestaurant";
import FooterMenu from "../components/FooterMenu/FooterMenu";
import MenuCategory from "../components/MenuCategory/MenuCategory";
import CardOrderInProgress from "../components/CardOrderInProgress/CardOrderInProgress";

const HomePage = () => {
  useProtectedPage();

  const [busca, setBusca] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurants] = useRequestData("restaurants", {});
  const [order, updateOrder] = useRequestData("active-order", {});

  useEffect(() => {
    if (order.order !== undefined && order.order !== null) {
      setInterval(() => {
        updateOrder();
      }, order.order.expiresAt - order.order.createdAt);
    }
  }, [order]);

  const filter = () => {
    if (
      restaurants &&
      restaurants.restaurants &&
      restaurants.restaurants.length > 0
    ) {
      const filtered = restaurants.restaurants
        .filter((restaurant) => {
          return restaurant.name.toLowerCase().includes(busca.toLowerCase());
        })
        .filter((restaurant) => {
          return !selectCategory || restaurant.category === selectCategory;
        });
      setFilteredRestaurants([...filtered]);
    }
  };

  useEffect(() => {
    filter();
  }, [selectCategory, busca]);

  const filterCategorys = () => {
    if (restaurants.restaurants && restaurants.restaurants.length) {
      let categorys = [];
      restaurants.restaurants.forEach((restaurant) => {
        if (categorys.indexOf(restaurant.category) === -1) {
          categorys.push(restaurant.category);
        }
      });
      return categorys;
    }
  };

  const backHome = () => {
    setBusca("");
  };

  const handleCategory = (category) => {
    if (category === selectCategory) {
      setSelectCategory("");
    } else {
      setSelectCategory(category);
    }
  };

  const newRender = () => {
    if (filteredRestaurants.length > 0 || busca.length > 0) {
      const isSearching = busca.length > 0;
      const notFound = isSearching && filteredRestaurants.length === 0;
      return (
        <>
          <MenuHeader
            currentPageLabel={isSearching ? "Busca" : "Ifuture"}
            isGoBack={isSearching}
            goTo={backHome}
          />
          <MainContainer>
            <InputSearch updateBusca={setBusca} value={busca} />
            {busca === "" && (
              <MenuCategory
                currentCategoty={selectCategory}
                handleCategory={handleCategory}
                categorys={filterCategorys()}
              />
            )}
            {notFound && <p className="notFound">Não encontramos :(</p>}
            {filteredRestaurants.map((restaurant) => {
              return <CardRestaurant restaurant={restaurant} />;
            })}
            {order && order.order && (
              <CardOrderInProgress
                name={order.order.restaurantName}
                subtotal={order.order.totalPrice}
              />
            )}
            {busca === "" && <FooterMenu currentPage="Home" />}
          </MainContainer>
        </>
      );
    } else {
      return (
        <>
          <MenuHeader currentPageLabel="Ifuture" />
          <MainContainer>
            <InputSearch updateBusca={setBusca} value={busca} />
            {restaurants &&
              restaurants.restaurants &&
              restaurants.restaurants.length > 0 && (
                <MenuCategory
                  currentCategoty={selectCategory}
                  handleCategory={handleCategory}
                  categorys={filterCategorys()}
                />
              )}
            {restaurants &&
              restaurants.restaurants &&
              restaurants.restaurants.length > 0 &&
              restaurants.restaurants.map((restaurant) => {
                return <CardRestaurant restaurant={restaurant} />;
              })}
          </MainContainer>
          {order && order.order && (
            <CardOrderInProgress
              name={order.order.restaurantName}
              subtotal={order.order.totalPrice}
            />
          )}
          <FooterMenu currentPage="Home" />
        </>
      );
    }
  };

  return <>{newRender()}</>;
};

export default HomePage;
