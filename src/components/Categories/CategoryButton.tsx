import Image from "next/image";
import { ButtonHTMLAttributes } from "react";
import { Button } from "../ui/button";

interface CategoryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  image: string;
  alt: string;
  active?: boolean;
}

export const CategoryButton = ({
  image,
  children,
  alt,
  active = false,
  ...props
}: CategoryButtonProps) => {
  return (
    <Button
      className="h-auto w-auto p-2 rounded-xl flex flex-col items-center font-bold data-[active=true]:ring-1 data-[active=true]:ring-primary data-[active=true]:bg-background shadow-none select-none"
      data-active={active}
      variant="ghost"
      {...props}
    >
      <Image
        src={image}
        alt={alt}
        width={64}
        height={64}
        quality={100}
        className="min-w-[64px]"
      />
      {children}
    </Button>
  );
};
