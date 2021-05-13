import React from "react";
import { DivConsteinerError } from "../GlobalStyle";
import { ReactComponent as Logo } from "../assets/logo-future-eats-invert.svg";

import MenuHeader from "../components/MenuHeader/MenuHeader";

const ErrorPage = () => {
  return (
    <DivConsteinerError>
      <MenuHeader currentPageLabel={""} isGoBack={true} />
      <div id="main">
        <Logo />
        <p>Página não foi encontrada!</p>
      </div>
    </DivConsteinerError>
  );
};

export default ErrorPage;
