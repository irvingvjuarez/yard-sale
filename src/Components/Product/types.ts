import { ActionType } from "../../globalTypes";
import { priceInterface } from "../../Pages/Cart/types";

export interface ProductProps{
  title: string;
  price: number;
  quantity: number;
  img: string;
  dispatch: React.Dispatch<ActionType>;
  id: number,
}