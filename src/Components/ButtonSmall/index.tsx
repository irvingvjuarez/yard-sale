import { ButtonSmallProps } from "./types"

export const ButtonSmall: React.FC<ButtonSmallProps> = ({ isLink, source, to, onclick }): JSX.Element => {
  return(
    <button onClick={onclick} className="Button-small">
      {isLink ? (
        <a href={to}>
          <img src={source} alt="" />
        </a>
      ) : (
        <img src={source} alt="" />
      )}
    </button>
  )
}