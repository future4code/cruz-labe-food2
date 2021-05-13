import styled from "styled-components";

export const CategoryContainer = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  cursor: pointer;
  display: flex;
  padding: 0.75rem 0;
  max-width: 100%;
  overflow: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  p {
    width: 5.438rem;
    height: 1.125rem;
    margin: 0 1rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
  }

  .selected {
    color: #e8222e;
  }
`;
