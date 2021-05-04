import React from 'react';
import FormRegisterAddress from './FormRegisterAddress';
import useProtectedPage from '../../hooks/useProtectedPage'
const RegisterAddressPage = () =>  {
  useProtectedPage()
  return (
    <> 
      <FormRegisterAddress/>
    </>
  )
}

export default RegisterAddressPage;