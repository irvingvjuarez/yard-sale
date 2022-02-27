import { ButtonCTAProps } from "./types";

export const ButtonCTA: React.FC<ButtonCTAProps> = ({
  ItemId,
  dispatch,
  added
}): JSX.Element => {
  const handleClick = () => {
    dispatch({ type: "ADD_TO_CART", payload: ItemId })
  }

  return(
    <button className={`ButtonCTA ${added && "added"}`} onClick={handleClick}>
      {added ? `Remove` : `Add to cart`}
    </button>
  )
}