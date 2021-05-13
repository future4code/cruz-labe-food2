import styled, { keyframes } from "styled-components";

export const InitialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e8222e;
  max-width: 100%;
  width: 500px;
  height: 100vh;
  z-index: 1;
  svg {
    width: 7.875rem;
    height: 4.063rem;
  }
`;
const fadeIn = keyframes`
  100%{
    transform:translate(-100%);
  }
`;
export const Container = styled.div`
  overflow: hidden;
  .show {
    -webkit-animation: 0.3s ${fadeIn} ease-out;
    -webkit-animation-fill-mode: forwards;
  }
`;
