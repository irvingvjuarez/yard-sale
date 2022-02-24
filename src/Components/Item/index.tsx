import { Rating } from "../Rating";
import { ButtonCTA } from "../ButtonCTA";

export const Item: React.FC = (): JSX.Element => {
  return(
    <div className="Item">
      <div className="Item__thumbnail">
        {/* <img src="" alt="" /> */}
      </div>

      <div className="Item__body">
        <h2>Name of the product(s)</h2>
        <span>$XXXXXX</span>
        <span>4 day delivery</span>
      </div>

      <div className="Item__footer">
        <Rating />
        <ButtonCTA content="Add to cart" />
      </div>
    </div>
  )
}