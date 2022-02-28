interface RatingInterface{
  rate: number;
  count: number;
}

export interface ItemInterface{
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: RatingInterface;
  title: string;
  added?: boolean
}

export interface StateInterface{
  items: Array<ItemInterface>,
  filteredItems: Array<ItemInterface>,
  shoppingCart: Array<ItemInterface>,
  searching: string,
  categories: Array<string>,
  current: string,
  error: boolean,
  loading: boolean
}

export type ActionType = {
  type: string,
  payload?: ItemInterface[] | string | number
}

export interface PageProps {
  state: StateInterface;
  dispatch?: React.Dispatch<ActionType>;
}