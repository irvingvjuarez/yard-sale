import { PageProps } from "../../globalTypes";
import ArrowLeft from "../../Assets/Icons/arrow-left.svg";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const Menu: React.FC<PageProps> = ({ state, dispatch }): JSX.Element => {
  const navigate: NavigateFunction = useNavigate()
  const handleClick = () => {
    navigate("/shopping-cart")
    dispatch && dispatch({ type: "MOVING", payload: "/shopping-cart" })
  }

  return(
    <section className="Menu">
      <article className="Menu__bar" onClick={handleClick}>
        <h2 className="Menu__title">Shopping Cart</h2>

        <span>
          <img src={ArrowLeft} alt="" />
        </span>
      </article>
    </section>
  )
}