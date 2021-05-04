import React from "react";
import FormEditPersonalData from "./FormEditPersonalData";
import MenuHeader from "../../components/MenuHeader/MenuHeader";

const EditPersonalData = () => {
  return (
    <>
      <MenuHeader currentPageLabel={"Editar"} isGoBack={true} />
      <FormEditPersonalData />
    </>
  );
};

export default EditPersonalData;
