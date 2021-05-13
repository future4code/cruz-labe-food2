import React from "react";
import { Header, ContainerIcon } from "./Styled";
import { ReactComponent as BackIcon } from "../../assets/back.svg";
import { useHistory } from "react-router-dom";

export default function MenuHeader({ currentPageLabel, isGoBack, goTo }) {
  const history = useHistory();

  return (
    <Header>
      {isGoBack && (
        <ContainerIcon onClick={goTo ? goTo : history.goBack}>
          <BackIcon />
        </ContainerIcon>
      )}
      {currentPageLabel}
    </Header>
  );
}
