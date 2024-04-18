"use client";

import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import { CategoryButton } from "./CategoryButton";

export const ListCategories = () => {
  return (
    <ScrollContainer className="flex gap-4 items-center overflow-x-auto container py-px">
      <CategoryButton alt="" image="/assets/pizza.png" active>
        Pizza
      </CategoryButton>
      <CategoryButton alt="" image="/assets/bebidas.png">
        Bebidas
      </CategoryButton>
      <CategoryButton alt="" image="/assets/pizza.png">
        Outro
      </CategoryButton>
      <CategoryButton alt="" image="/assets/pizza.png">
        Outro
      </CategoryButton>
      <CategoryButton alt="" image="/assets/pizza.png">
        Outro
      </CategoryButton>
      <CategoryButton alt="" image="/assets/pizza.png">
        Outro
      </CategoryButton>
      <CategoryButton alt="" image="/assets/pizza.png">
        Outro
      </CategoryButton>
      <CategoryButton alt="" image="/assets/pizza.png">
        Outro
      </CategoryButton>
      <CategoryButton alt="" image="/assets/pizza.png">
        Outro
      </CategoryButton>
      <CategoryButton alt="" image="/assets/pizza.png">
        Outro
      </CategoryButton>
      <CategoryButton alt="" image="/assets/pizza.png">
        Outro
      </CategoryButton>
      <CategoryButton alt="" image="/assets/pizza.png">
        Outro
      </CategoryButton>
      <CategoryButton alt="" image="/assets/pizza.png">
        Outro
      </CategoryButton>
    </ScrollContainer>
  );
};
