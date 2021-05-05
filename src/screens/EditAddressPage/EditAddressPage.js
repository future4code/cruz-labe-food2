import React from "react";
import FormEditAddressPage from "./FormEditAddressPage";
import MenuHeader from "../../components/MenuHeader/MenuHeader";
import MainContainer from '../../components/MainContainer/MainContainer'
const EditAddressPage = () => {
  return (
    <>
      <MenuHeader currentPageLabel={"Endereço"} isGoBack={true} />
      <MainContainer>
      <FormEditAddressPage />
      </MainContainer>
    </>
  );
};

export default EditAddressPage;
