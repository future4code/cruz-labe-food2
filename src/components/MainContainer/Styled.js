import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  padding: 0 1rem;
  .notFound {
    opacity: 0.89;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    padding: 0.75rem 0;
    margin-top: 0.5rem;
  }

  .classCardDetails {
    border: none;

    > div {
      padding: 0.25rem 0;

      > div {
        justify-content: flex-start;

        p:last-child {
          margin-left: 0.5rem;
        }
      }
    }
  }
`;
