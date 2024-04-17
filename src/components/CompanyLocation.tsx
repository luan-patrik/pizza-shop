import { MapPinIcon } from "lucide-react";

export const CompanyLocation = () => {
  return (
    <div className="container">
      <div className="bg-[#FFF1E7] flex items-center gap-2 justify-between text-[#E86A12] p-2 rounded">
        <p className="text-sm font-bold">29 Hola street, California, USA</p>
        <MapPinIcon className="size-4" />
      </div>
    </div>
  );
};
