import Star from "../../Assets/Icons/star.svg";

export const Rating: React.FC = (): JSX.Element => {
  return(
    <div className="Rating">
      <p className="Rating__grade">4.5</p>
      <img src={Star} alt="" className="Rating__logo" />
    </div>
  )
}