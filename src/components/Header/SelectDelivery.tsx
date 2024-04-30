import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const SelectDelivery = () => {
  return (
    <Select defaultValue="get">
      <SelectTrigger className="w-24 font-bold text-xs text-primary">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          value="get"
          className="font-semibold text-xs uppercase"
          defaultChecked
        >
          BUSCAR
        </SelectItem>
        <SelectItem
          value="delivery"
          className="font-semibold text-xs uppercase"
        >
          DELIVERY
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
