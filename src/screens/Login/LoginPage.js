import React from "react";
import FormLogin from "./FormLogin";
import { DivLog, Link } from "../../GlobalStyle";
import { ReactComponent as Logo } from "../../assets/logo-future-eats-invert.svg";

const Login = () => {
  return (
    <>
      <DivLog>
        <Logo />
      </DivLog>
      <FormLogin />
      <Link href="../signup">Não possui cadastro? Clique aqui.</Link>
    </>
  );
};

export default Login;
