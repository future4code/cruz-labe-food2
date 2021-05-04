import React from 'react';
import FormRegisterAddress from './FormRegisterAddress';
import useProtectedPage from '../../hooks/useProtectedPage'
import MenuHeader from '../../components/MenuHeader/MenuHeader'
const RegisterAddressPage = () =>  {
  useProtectedPage()
  return (
    <>  
    <MenuHeader currentPageLabel={""} isGoBack={true}/>
      <FormRegisterAddress/>
    </>
  )
}

export default RegisterAddressPage;