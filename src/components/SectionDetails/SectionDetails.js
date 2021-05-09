import React from "react";
import { DetailsContainer, Title } from "./Styled";

export default function SectionDetails({ labelTitle, children }) {
  return (
    <DetailsContainer>
      <Title>{labelTitle}</Title>
      {children}
    </DetailsContainer>
  );
}
