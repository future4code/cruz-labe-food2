import React, { useState, useEffect } from 'react';
import MenuHeader from '../components/MenuHeader/MenuHeader';
import InputSearch from '../components/InputSearch/InputSearch';
import MainContainer from '../components/MainContainer/MainContainer';
import useProtectedPage from '../hooks/useProtectedPage'
import { useRequestData } from '../hooks/useRequestData'
import CardRestaurant from '../components/CardRestaurant/CardRestaurant'
import FooterMenu from '../components/FooterMenu/FooterMenu'
import MenuCategory from '../components/MenuCategory/MenuCategory'
import {goToHome} from '../Routes/Coordinators'

const HomePage = () => {
  // useProtectedPage()
  const [data, updateData] = useRequestData('restaurants', {})
  const [restaurants, setRestaurants] = useState([])
  const [busca, setBusca] = useState('')

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

  const filterSearch = () => {
    if (restaurants === undefined) {
      return []
    } else {
      return restaurants.filter(restaurant => {
        return restaurant.name.toLowerCase().includes(busca.toLowerCase())
      })
    }
  }

  const restaurantsFiltered = filterSearch()
  const backHome = () => {
    setBusca('')
  }

  const render = () => {
    if (restaurantsFiltered.length > 0 && busca.length > 0 || restaurantsFiltered.length === 0 ) {
      const wasFound = restaurantsFiltered.length === 0 && busca.length > 0
      return (
        <>
          <MenuHeader currentPageLabel='Busca' isGoBack goTo={backHome} />
          <MainContainer>
          <InputSearch updateBusca={setBusca} value={busca} />
            {wasFound ? 
              <p className='notFound'>Não encontramos :(</p>
              : 
              restaurantsFiltered.map((restaurant) => {
                return (
                  <CardRestaurant
                    restaurant={restaurant}
                  />
                )
              })
            }
          </MainContainer>
        </>
      )
    } else {
      return (
        <>
          <MenuHeader currentPageLabel='Ifuture' />
          <MainContainer>
            <InputSearch updateBusca={setBusca} value={busca} />
            {restaurants && restaurants.length > 0 && <MenuCategory categorys={filterCategorys()} />}
            {restaurants && restaurants.length > 0 && restaurantsFiltered.map((restaurant) => {
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
  }

  // console.log('homepage', restaurants);
  return (
    <>
      {render()}
    </>
  )
}

export default HomePage;