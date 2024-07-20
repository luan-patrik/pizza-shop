import { Virtuoso } from "react-virtuoso";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";

export const ListProducts = () => {
  return (
    <div className="h-[100%]  flex relative flex-auto flex-col">
      <Virtuoso
        style={{
          height: "100%",
        }}
        totalCount={1000}
        itemContent={(index) => (
          <Card image="/assets/margarita.png">
            <CardContent>
              <CardHeader>Teste {index}</CardHeader>
              <CardDescription>Ola Pizza</CardDescription>
              <CardFooter price={23.99} />
            </CardContent>
          </Card>
        )}
      />
    </div>
  );
};
