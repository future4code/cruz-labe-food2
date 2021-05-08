import React, { useState, useEffect } from "react";
import MenuHeader from "../components/MenuHeader/MenuHeader";
import InputSearch from "../components/InputSearch/InputSearch";
import MainContainer from "../components/MainContainer/MainContainer";
import useProtectedPage from "../hooks/useProtectedPage";
import { useRequestData } from "../hooks/useRequestData";
import CardRestaurant from "../components/CardRestaurant/CardRestaurant";
import FooterMenu from "../components/FooterMenu/FooterMenu";
import MenuCategory from "../components/MenuCategory/MenuCategory";
import { goToHome } from "../Routes/Coordinators";
import CardOrderInProgress from '../components/CardOrderInProgress/CardOrderInProgress';

const HomePage = () => {
  // useProtectedPage()
  const [data, updateData] = useRequestData("restaurants", {});
  const [restaurants, setRestaurants] = useState([]);
  const [busca, setBusca] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(data.restaurants);
  }, [data]);

  const filter = () => {
    if (!(restaurants === undefined)) {
      console.log("filter", selectCategory);
      const filtered = restaurants
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
    let categorys = [];
    // console.log(restaurants)
    restaurants.forEach((restaurant) => {
      if (categorys.indexOf(restaurant.category) === -1) {
        categorys.push(restaurant.category);
      }
    });
    return categorys;
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
      const notFound = isSearching && filteredRestaurants.length === 0
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
                selectCategory={handleCategory}
                categorys={filterCategorys()}
              />
            )}
            {notFound && <p className="notFound">Não encontramos :(</p>}
            {filteredRestaurants.map((restaurant) => {
              return <CardRestaurant restaurant={restaurant} />;
            })}
            {busca === "" && <FooterMenu currentPage="Home"/>}
          
          </MainContainer>
          <CardOrderInProgress/>
        </>
      );
    } else {
      return (
        <>
          <MenuHeader currentPageLabel="Ifuture" />
          <MainContainer>
            <InputSearch updateBusca={setBusca} value={busca} />
            {restaurants && restaurants.length > 0 && (
              <MenuCategory
                selectCategory={handleCategory}
                categorys={filterCategorys()}
              />
            )}
            {restaurants &&
              restaurants.length > 0 &&
              restaurants.map((restaurant) => {
                return <CardRestaurant restaurant={restaurant} />;
              })}
          </MainContainer>
          <CardOrderInProgress/>
          <FooterMenu currentPage="Home"/>
        </>
      );
    }
  };

  // console.log('homepage', restaurants);
  return <>{newRender()}</>;
};

export default HomePage;
