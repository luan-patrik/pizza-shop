"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import { SearchParams } from "../URLSearchParams";
import { CategoryButton } from "./CategoryButton";

export const ListCategories = () => {
  const params = SearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getActiveStatus = (category: string) => {
    return searchParams.get("category") === category;
  };

  const updateCategory = (category: string) => {
    return router.push(`${pathname}?${params("category", category)}`);
  };

  return (
    <ScrollContainer className="flex gap-4 items-center overflow-x-auto container py-px">
      <CategoryButton
        alt=""
        image="/assets/pizza.png"
        value={"pizza"}
        active={getActiveStatus("pizza")}
        onClick={() => updateCategory("pizza")}
      >
        Pizza
      </CategoryButton>
      <CategoryButton
        alt=""
        image="/assets/bebidas.png"
        value={"bebidas"}
        active={getActiveStatus("bebidas")}
        onClick={() => updateCategory("bebidas")}
      >
        Bebidas
      </CategoryButton>
      {Array.from({ length: 100 })
        .fill(0)
        .map((_, i) => (
          <CategoryButton
            key={i}
            alt=""
            image="/assets/pizza.png"
            value={`outro${i}`}
            active={getActiveStatus(`outro${i + 1}`)}
            onClick={() => updateCategory(`outro${i + 1}`)}
          >
            Outro {i + 1}
          </CategoryButton>
        ))}
    </ScrollContainer>
  );
};
