import React from 'react';
import MenuHeader from '../components/MenuHeader/MenuHeader';
import InputSearch from '../components/InputSearch/InputSearch';
import MainContainer from '../components/MainContainer/MainContainer';
import useProtectedPage from '../hooks/useProtectedPage'

const HomePage = () => {
  // useProtectedPage()
  return (
    <>
      <MenuHeader currentPageLabel='Ifuture'/>
      <MainContainer>
        <InputSearch />
        HomePage
      </MainContainer>
    </>
  )
}

export default HomePage;