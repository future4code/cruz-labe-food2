import React, { useState } from 'react';
import {InitialContainer, Container} from './Styled';
import { ReactComponent as Logo } from "../../assets/logo-future-eats.svg";

const InitialAnimation = ({setStart, start}) => {
  const [show, setShow] = useState(false)
  const onChageStart = () =>{
    setShow(true)
    setTimeout(() =>{
      setStart(false)
    } , 300)
  }
  return(
    <Container >
      <div className={show?"show": "notShow"}>
    <InitialContainer onClick={onChageStart}>
      <Logo />
    </InitialContainer>
    </div>
    </Container>
  )
}
export default InitialAnimation;