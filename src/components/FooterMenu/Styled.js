import styled from "styled-components";

export const MainFooter = styled.div`
  max-width: 100%;
  width: 500px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  position: fixed;
  bottom: 1px;
  border-top: 1px solid #b8b8b8;
  background-color: #ffffff;
  bottom: 0;
  align-self: center;
  left: 50%;
  transform: translateX(-50%);
`;
export const IconButton = styled.div`
  width: 7.5rem;
  height: 3.062rem;
  padding: 0.688rem 2.875rem 0.688rem 2.938rem;
`;

export const IconImage = styled.img`
  width: 1.688rem;
  height: 1.688rem;
  object-fit: contain;
  fill: red;
  cursor: pointer;
`;
