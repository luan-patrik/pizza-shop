import { MoneyFormatterBRL } from "@/hooks/useMoneyFormatterBRL";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ButtonHTMLAttributes, HTMLAttributes, forwardRef } from "react";
import { Button } from "./button";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  image: string;
}

interface CardButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const CardButton = forwardRef<HTMLButtonElement, CardButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        {...props}
        className={cn(
          "p-0 h-auto w-min absolute right-0 bottom-0 rounded-tl-xl rounded-tr-none rounded-b-none px-2",
          className
        )}
      >
        + ADD
      </Button>
    );
  }
);

CardButton.displayName = "CardButton";

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, image, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className="flex rounded-xl relative overflow-hidden shadow-md gap-4 bg-gradient-to-r from-[#FFF1E8] h-[7.5rem]"
      >
        <Image
          src={image}
          alt=""
          quality={100}
          width={148}
          height={148}
          className={cn("object-contain", className)}
        />
        {children}
        <CardButton />
      </div>
    );
  }
);

Card.displayName = "Card";

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn("flex flex-col space-y-2 w-full", className)}
      />
    );
  }
);

CardContent.displayName = "CardContent";

interface CardHeaderProps extends HTMLAttributes<HTMLHeadingElement> {}

const CardHeader = forwardRef<HTMLHeadingElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <header ref={ref} {...props}>
        <h4 className={cn("text-lg font-bold", className)}>{children}</h4>
      </header>
    );
  }
);

CardHeader.displayName = "CardHeader";

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => {
    return <p ref={ref} {...props} className={cn("text-sm", className)} />;
  }
);

CardDescription.displayName = "CardDescription";

interface CardFooterProps extends HTMLAttributes<HTMLElement> {
  price: number;
}

const CardFooter = forwardRef<HTMLElement, CardFooterProps>(
  ({ className, price, ...props }, ref) => {
    return (
      <footer
        {...props}
        ref={ref}
        className={cn("flex justify-between", className)}
      >
        <p className="text-sm font-bold">{MoneyFormatterBRL(price)}</p>
      </footer>
    );
  }
);

CardFooter.displayName = "CardFooter";

export { Card, CardContent, CardDescription, CardFooter, CardHeader };
