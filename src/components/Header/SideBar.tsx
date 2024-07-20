import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";

export const SideBar = () => {
  return (
    <div>
      <Button>
        <MenuIcon aria-hidden="true" focusable="false" />
      </Button>
    </div>
  );
};
