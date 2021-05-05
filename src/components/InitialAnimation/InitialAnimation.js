import React from 'react';
import {InitialContainer} from './Styled';
import { ReactComponent as Logo } from "../../assets/logo-future-eats.svg";

const InitialAnimation = ({setStart}) => {
  return(
    <InitialContainer onClick={()=> setStart(false)}>
      <Logo />
    </InitialContainer>
  )
}

export default InitialAnimation;