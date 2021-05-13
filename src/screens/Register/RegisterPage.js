import React from "react";
import FormRegister from "./FormRegister";
import { DivLog } from "../../GlobalStyle";
import { ReactComponent as Logo } from "../../assets/logo-future-eats-invert.svg";
import MenuHeader from "../../components/MenuHeader/MenuHeader";
import MainContainer from "../../components/MainContainer/MainContainer";

const RegisterPage = () => {
  return (
    <>
      <MenuHeader currentPageLabel={""} isGoBack={true} />
      <MainContainer>
        <DivLog>
          <Logo />
        </DivLog>
        <FormRegister />
      </MainContainer>
    </>
  );
};

export default RegisterPage;
