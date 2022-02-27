import { StateInterface, ActionType, ItemInterface } from "./globalTypes"

export const initialState = (): StateInterface => {
  return {
    items: [],
    filteredItems: [],
    shoppingCart: [],
    categories: ["All items"],
    searching: "",
    error: false,
    loading: true
  }
}

export function reducer(state: StateInterface, action: ActionType): StateInterface{
  const { type, payload } = action

  switch(type){
    case "ADD_TO_CART":
      let newCartItem: ItemInterface | undefined = state.items.find(item => item.id === payload)
      state.shoppingCart = newCartItem ? [...state.shoppingCart, newCartItem] : state.shoppingCart
      return{
        ...state
      }
    case "SEARCH":
      state.filteredItems = state.items.filter(item => {
        let searching: string = payload as string
        return item.title.toLowerCase().includes(searching.toLowerCase())
      })

      return{
        ...state,
        searching: payload as string
      }
    case "FILTER":
      state.filteredItems = payload === "All items" ? state.items : state.items.filter(item => item.category === payload)
      return{
        ...state
      }
    case "ADD_INITIAL_ITEMS":
      (payload as ItemInterface[]).forEach((product: ItemInterface) => {
        if(!state.categories.includes(product.category)){
          state.categories.push(product.category)
        }
      })

      return {
        ...state,
        items: payload as ItemInterface[],
        filteredItems: payload as ItemInterface[],
        loading: false
      }
    case "ERROR":
      return {
        ...state,
        error: true,
        loading: false
      }
    default:
      return state
  }
}