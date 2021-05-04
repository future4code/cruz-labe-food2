import React from "react";
import FormRegister from "./FormRegister";
import { DivLog } from "../../GlobalStyle";
import { ReactComponent as Logo } from "../../assets/logo-future-eats-invert.svg";
import MenuHeader from "../../components/MenuHeader/MenuHeader";

const RegisterPage = () => {
  return (
    <>
      <MenuHeader currentPageLabel={""} isGoBack={true} />
      <DivLog>
        <Logo />
      </DivLog>
      <FormRegister />
    </>
  );
};

export default RegisterPage;
