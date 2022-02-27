import { Rating } from "../Rating";
import { ButtonCTA } from "../ButtonCTA";
import { ItemProps } from "./types";

export const Item: React.FC<ItemProps> = ({ 
  id, 
  name,
  category,
  price,
  rate,
  image,
  dispatch
}): JSX.Element => {
  return(
    <div className="Item">
      <div className="Item__thumbnail">
        <img src={image} alt={name} />
      </div>

      <div className="Item__body">
        <h2>{name}</h2>
        <span>${price}</span>
        <span className="Item__category">{category}</span>
      </div>

      <div className="Item__footer">
        <Rating content={rate} />
        <ButtonCTA content="Add to cart" ItemId={id} dispatch={dispatch} />
      </div>
    </div>
  )
}