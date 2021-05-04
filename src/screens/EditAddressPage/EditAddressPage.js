import React from "react";
import FormEditAddressPage from "./FormEditAddressPage";
import MenuHeader from "../../components/MenuHeader/MenuHeader";

const EditAddressPage = () => {
  return (
    <>
      <MenuHeader currentPageLabel={"Endereço"} isGoBack={true} />
      <FormEditAddressPage />
    </>
  );
};

export default EditAddressPage;
