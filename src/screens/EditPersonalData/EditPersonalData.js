import React from "react";
import FormEditPersonalData from "./FormEditPersonalData";
import MenuHeader from "../../components/MenuHeader/MenuHeader";
import MainContainer from '../../components/MainContainer/MainContainer'
const EditPersonalData = () => {
  return (
    <>
      <MenuHeader currentPageLabel={"Editar"} isGoBack={true} />
      <MainContainer>
      <FormEditPersonalData />
      </MainContainer>
    </>
  );
};

export default EditPersonalData;
