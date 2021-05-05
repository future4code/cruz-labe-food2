import React, { useState, useEffect } from 'react';
import MenuHeader from '../components/MenuHeader/MenuHeader';
import InputSearch from '../components/InputSearch/InputSearch';
import MainContainer from '../components/MainContainer/MainContainer';
import useProtectedPage from '../hooks/useProtectedPage'
import {useRequestData} from '../hooks/useRequestData'
import CardRestaurant from '../components/CardRestaurant/CardRestaurant'
import FooterMenu from '../components/FooterMenu/FooterMenu'
import MenuCategory from '../components/MenuCategory/MenuCategory'

const HomePage = () => {
  // useProtectedPage()
  const [data, updateData] = useRequestData('restaurants', {})
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
      setRestaurants(data.restaurants)
  }, [data])

  const filterCategorys = () => {
    let categorys = []
    // console.log(restaurants)
    restaurants.forEach(restaurant => {
      if (categorys.indexOf(restaurant.category) === -1) {
        categorys.push(restaurant.category)
      }
    })
    return categorys
  }
  
  // console.log('homepage', restaurants);
  return (
    <>
      <MenuHeader currentPageLabel='Ifuture'/>
      <MainContainer>
        <InputSearch />
        {restaurants && restaurants.length > 0 && <MenuCategory categorys={filterCategorys()} />}
        {restaurants && restaurants.length > 0 && restaurants.map((restaurant) => {
          return (
            <CardRestaurant
              restaurant={restaurant}
            />
          )
        })}       
      </MainContainer>
      <FooterMenu />
    </>
  )
}

export default HomePage;