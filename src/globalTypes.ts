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
}

export interface StateInterface{
  items: Array<ItemInterface>,
  filteredItems: Array<ItemInterface>,
  searching: string,
  categories: Array<string>,
  error: boolean,
  loading: boolean
}

export type ActionType = {
  type: string,
  payload?: ItemInterface[] | string
}