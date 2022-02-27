import { ButtonCTAProps } from "./types";

export const ButtonCTA: React.FC<ButtonCTAProps> = ({
  ItemId,
  dispatch,
  added
}): JSX.Element => {
  const handleClick = () => {
    const action: string = added ? "REMOVE" : "ADD_TO_CART";
    dispatch({ type: action, payload: ItemId })
  }

  return(
    <button className={`ButtonCTA ${added && "added"}`} onClick={handleClick}>
      {added ? `Remove` : `Add to cart`}
    </button>
  )
}