import { ButtonSmall } from "../ButtonSmall";
import Trash from "../../Assets/Icons/trash.svg";
import { ProductProps } from "./types";

export const Product: React.FC<ProductProps> = ({ title, price, img }): JSX.Element => {
  return(
    <div className="Product">
      <div className="Product__thumbnail">
        <img src={img} alt={title} />
      </div>

      <div className="Product__content">
        <div>
          <h2>{title}</h2>
          <span>${price}</span>
          <select>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
          </select>
        </div>

        <ButtonSmall source={Trash} />
      </div>
    </div>
  )
}