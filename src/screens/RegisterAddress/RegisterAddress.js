import React from "react";
import FormRegisterAddress from "./FormRegisterAddress";
import useProtectedPage from "../../hooks/useProtectedPage";
import MenuHeader from "../../components/MenuHeader/MenuHeader";
import MainContainer from "../../components/MainContainer/MainContainer";

const RegisterAddressPage = () => {
  useProtectedPage();
  return (
    <>
      <MenuHeader currentPageLabel={""} isGoBack={true} />
      <MainContainer>
        <FormRegisterAddress />
      </MainContainer>
    </>
  );
};

export default RegisterAddressPage;
