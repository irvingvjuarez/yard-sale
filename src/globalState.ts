import { StateInterface, ActionType, ItemInterface } from "./globalTypes"

export const initialState = (): StateInterface => {
  return {
    items: [],
    error: false,
    loading: true
  }
}

export function reducer(state: StateInterface, action: ActionType): StateInterface{
  const { type, payload } = action

  switch(type){
    case "ADD_INITIAL_ITEMS":
      return {
        ...state,
        items: payload as ItemInterface[],
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

// export const reducer: any = (state: StateInterface, action: ActionType) => {
//   switch(action.type){
//     case "ADD_ITEM":
//       state.items.push(action.payload)

//       return{
//         ...state,
//         items: state.items,
//         loading: false
//       }
//     case "ERROR":
//       return {
//         ...state,
//         error: true,
//         loading: false
//       }
//     default:
//       return {
//         ...state
//       }
//   }
// }