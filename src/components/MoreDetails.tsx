import { MoneyFormatterBRL } from "@/hooks/useMoneyFormatterBRL";
import { XIcon } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";

export const MoreDetails = ({ children }: { children: ReactNode }) => {

  return (
    <Drawer>
      {children}
      <DrawerContent>
        <DrawerHeader className="flex items-center justify-between gap-0.5">
          <DrawerTitle className="text-xl font-bold text-start">
            Are you absolutely sure?
          </DrawerTitle>
          <DrawerClose>
            <XIcon aria-hidden="true" focusable="false" className="size-5" />
          </DrawerClose>
        </DrawerHeader>
        <hr />
        <div>
          <p className="text-sm font-semibold">Item 1</p>
        </div>
        <DrawerFooter className="flex-row gap-x-4">
          <Button className="uppercase flex-1 h-auto">+ ADICIONAR</Button>
          <div>
            <p className="text-sm font-semibold">Item Total</p>
            <span className="text-xl font-bold">
              {MoneyFormatterBRL(10.99)}
            </span>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
