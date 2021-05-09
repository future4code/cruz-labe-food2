import React from "react";
import FormEditPersonalData from "./FormEditPersonalData";
import MenuHeader from "../../components/MenuHeader/MenuHeader";
import MainContainer from "../../components/MainContainer/MainContainer";
import useProtectedPage from "../../hooks/useProtectedPage";
const EditPersonalData = () => {
  useProtectedPage();
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
