import React, { useState } from "react";
import { InitialContainer, Container } from "./Styled";
import { ReactComponent as Logo } from "../../assets/logo-future-eats.svg";

const InitialAnimation = ({ setStart }) => {
  const [show, setShow] = useState(false);
  const onChangeStart = () => {
    setShow(true);
    setTimeout(() => {
      setStart(false);
    }, 300);
  };
  setTimeout(() => {
    onChangeStart();
  }, 1500);
  return (
    <Container>
      <div className={show && "show"}>
        <InitialContainer onClick={onChangeStart}>
          <Logo />
        </InitialContainer>
      </div>
    </Container>
  );
};
export default InitialAnimation;
