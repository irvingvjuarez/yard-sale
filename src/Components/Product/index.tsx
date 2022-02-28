import { ButtonSmall } from "../ButtonSmall";
import Trash from "../../Assets/Icons/trash.svg";

export const Product: React.FC = (): JSX.Element => {
  return(
    <div className="Product">
      <div className="Product__thumbnail">
        {/* <img src="" alt="" /> */}
      </div>

      <div className="Product__content">
        <div>
          <h2>Article Name</h2>
          <span>$XXXXXXX</span>
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