import React, { useState, useEffect } from 'react';
import MenuHeader from '../components/MenuHeader/MenuHeader';
import InputSearch from '../components/InputSearch/InputSearch';
import MainContainer from '../components/MainContainer/MainContainer';
import useProtectedPage from '../hooks/useProtectedPage'
import {useRequestData} from '../hooks/useRequestData'
import CardRestaurant from '../components/CardRestaurant/CardRestaurant'

const HomePage = () => {
  // useProtectedPage()
  const [data, updateData] = useRequestData('restaurants', {})
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
      setRestaurants(data.restaurants)
  }, [data])
  
  console.log('homepage', restaurants);
  return (
    <>
      <MenuHeader currentPageLabel='Ifuture'/>
      <MainContainer>
        <InputSearch />
        {restaurants && restaurants.length > 0 && <CardRestaurant restaurant={restaurants[0]}/>}
        
        HomePage
      </MainContainer>
    </>
  )
}

export default HomePage;