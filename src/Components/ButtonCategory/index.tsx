import { useContext } from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import { ButtonCategoryProps } from "./types"

export const ButtonCategory: React.FC<ButtonCategoryProps> = ({
  content,
  dispatch,
  ctx,
  to
  }): JSX.Element => {
  const navigate: NavigateFunction = useNavigate()
  const state = useContext(ctx)
  const { filterAt } = state
  const handleClick = () => {
    if(to) navigate(to)
    dispatch({ type: "FILTER", payload: content })
  }

  const styles: string = `Button-category ${(filterAt === content && !to) && "chosen"}`

  return(
    <button className={styles} onClick={handleClick}>
      {content}
    </button>
  )
}