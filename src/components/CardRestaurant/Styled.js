import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-height: ${(props) => (props.hasDetails ? 17.75 : 11.75)} rem;
  padding: 0 0 0.25rem;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin-top: 0.5rem;
  box-sizing: border-box;
  cursor: pointer;
`;

export const Banner = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 8px 8px 0 0;
`;

export const ContainerInfo = styled.div`
  /* padding: 0.25rem ${(props) => (props.hasDetails ? 1 : 0)} rem; */
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  padding: 0.25rem 1rem;

  p {
    margin: 0.25rem 0;
  }

  > div {
    display: flex;
    justify-content: space-between;

    p:first-child {
      min-width: 6.5rem;
    }
  }
`;

export const Name = styled.p`
  color: #e8222e;
`;
