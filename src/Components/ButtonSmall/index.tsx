import { ButtonSmallProps } from "./types"

export const ButtonSmall: React.FC<ButtonSmallProps> = ({ 
  isLink,
  source,
  to,
  onclick,
  notificationsFlag,
  isCTA
}): JSX.Element => {
  return(
    <button onClick={onclick} className={`Button-small ${isCTA && "cta"}`}>
      {notificationsFlag as number > 0 && (
        <span className="Button-small__notification"></span>
      )}

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