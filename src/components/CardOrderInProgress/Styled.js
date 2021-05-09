import styled from "styled-components";

export const MainFooter = styled.div`
  max-width: 100%;
  width: 500px;
  display: flex;
  position: fixed;
  bottom: 1px;
  background-color: #e8222e;
  align-self: center;
  left: 50%;
  transform: translateX(-50%);
  height: 7.375rem;
  margin-bottom: 3.062rem;
`;

export const Title = styled.h3`
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: white;
  margin: 0.25rem 0;
`;
export const NameRestaurant = styled.h5`
  margin: 0.25rem 0;
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`;
export const Subtotal = styled.h4`
  margin: 0.25rem 0;
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
  text-transform: uppercase;
`;

export const IconClock = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 1.5rem;
`;
export const DivIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const DivInformation = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
