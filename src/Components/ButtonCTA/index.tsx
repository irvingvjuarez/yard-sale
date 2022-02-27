import { ButtonCTAProps } from "./types";

export const ButtonCTA: React.FC<ButtonCTAProps> = ({content, ItemId, dispatch}): JSX.Element => {
  const handleClick = () => {
    dispatch({ type: "ADD_TO_CART", payload: ItemId })
  }

  return(
    <button className="ButtonCTA" onClick={handleClick}>
      {content}
    </button>
  )
}