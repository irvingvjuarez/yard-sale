import { StateInterface, ActionType, ItemInterface } from "./globalTypes"

export const initialState = (): StateInterface => {
  return {
    items: [],
    filteredItems: [],
    categories: ["All items"],
    error: false,
    loading: true
  }
}

export function reducer(state: StateInterface, action: ActionType): StateInterface{
  const { type, payload } = action

  switch(type){
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