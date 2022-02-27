import { PageProps } from "../../globalTypes";
import ArrowLeft from "../../Assets/Icons/arrow-left.svg";

export const Menu: React.FC<PageProps> = ({ state, dispatch }): JSX.Element => {
  return(
    <section className="Menu">
      <a href="/shopping-cart">
        <h2 className="Menu__title">Shopping Cart</h2>

        <span>
          <img src={ArrowLeft} alt="" />
        </span>
      </a>
    </section>
  )
}