import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { ListCategories } from "../Categories/ListCategories";
import { CompanyLocation } from "../CompanyLocation";
import { Button } from "../ui/button";
import { SelectDelivery } from "./SelectDelivery";

export const Header = () => {
  return (
    <header className="bg-[#FCF8F5] py-2 flex flex-col gap-y-2">
      <div className="flex items-center justify-between container">
        <div className="flex items-center gap-4 flex-1">
          <Button variant="ghost" className="text-foreground w-auto h-auto p-1">
            <MenuIcon className="size-5" />
          </Button>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/3/3b/PlaceholderRoss.png"
            alt="Logo"
            width={20}
            height={20}
            className="bg-white"
          />
          <p className="font-medium">DODO PIZZAS</p>
        </div>
        <SelectDelivery />
      </div>
      <CompanyLocation />
      <ListCategories />
    </header>
  );
};
