import { ButtonCTAProps } from "./types";

export const ButtonCTA: React.FC<ButtonCTAProps> = ({
  ItemId,
  dispatch,
  added,
  content
}): JSX.Element => {
  const handleClick = () => {
    const action: string = added ? "REMOVE" : "ADD_TO_CART";
    dispatch && dispatch({ type: action, payload: ItemId })
  }

  return(
    <button className={`ButtonCTA ${added && "added"}`} onClick={handleClick}>
      {
        content ? content
        :
        added ? `Remove` : `Add to cart`
      }
    </button>
  )
}