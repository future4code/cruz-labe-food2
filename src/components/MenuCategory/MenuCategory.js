import React from "react";
import { CategoryContainer } from "./Styled";

export default function MenuCategory({
  categorys,
  handleCategory,
  currentCategoty,
}) {
  return (
    <CategoryContainer>
      {categorys.map((category) => {
        return (
          <p
            className={currentCategoty === category && "selected"}
            key={category}
            onClick={() => handleCategory(category)}
          >
            {category}
          </p>
        );
      })}
    </CategoryContainer>
  );
}
