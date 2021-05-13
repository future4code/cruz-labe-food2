import React, { useState } from "react";
import FormLogin from "./FormLogin";
import { DivLog, Link } from "../../GlobalStyle";
import { ReactComponent as Logo } from "../../assets/logo-future-eats-invert.svg";
import MainContainer from "../../components/MainContainer/MainContainer";
import { goToSignUp } from "../../Routes/Coordinators";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <MainContainer>
      <DivLog>
        <Logo />
      </DivLog>
      <FormLogin />
      <Link onClick={() => goToSignUp(history)}>
        Não possui cadastro? Clique aqui.
      </Link>
    </MainContainer>
  );
};

export default Login;
