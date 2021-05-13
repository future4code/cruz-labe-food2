import styled from "styled-components";

import Dialog from "@material-ui/core/Dialog";

export const DialogQuantity = styled(Dialog)`
  width: 100%;

  > div {
    width: 100%;

    > div {
      // DialogContent
      width: 91.6%;
      height: 13.5rem;

      div:first-child {
        // DialogContentText
        text-align: center;
      }

      div:nth-child(2) {
        padding: 0.5rem 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
    }

    div:nth-child(2) {
      // DialogActions
      button {
        width: 100%;
        justify-content: flex-end;
        color: #4f81a8;
        margin-right: 2rem;
      }
    }
  }
`;

export const DivSelect = styled.div`
  width: 100%;
  border-radius: 4px;
  border: solid 1px #b8b8b8;
  /* position: relative; */
  height: 3.5rem;

  display: flex;
  align-items: center;
  position: relative;
`;

export const Select = styled.select`
  margin: 0 1rem;
  box-shadow: 0 0 0 0;
  background-color: white;
  border: 0 none;
  outline: 0;
  width: 100%;
  font-size: 1rem;
  letter-spacing: -0.39px;
  cursor: pointer;
`;
