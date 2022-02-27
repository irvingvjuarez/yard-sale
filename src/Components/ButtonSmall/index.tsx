import { useNavigate } from "react-router-dom";
import { ButtonSmallProps } from "./types";

export const ButtonSmall: React.FC<ButtonSmallProps> = ({ 
  source,
  to,
  onclick,
  notificationsFlag,
  isCTA
}): JSX.Element => {
  const navigate = useNavigate()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if(onclick) onclick(e)
    if(to) navigate(to)
  }

  return(
    <button onClick={handleClick} className={`Button-small ${isCTA && "cta"}`}>
      {notificationsFlag as number > 0 && (
        <span className="Button-small__notification"></span>
      )}
      <img src={source} alt="" />
    </button>
  )
}