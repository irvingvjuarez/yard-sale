import { useContext } from "react"
import { ButtonCategoryProps } from "./types"

export const ButtonCategory: React.FC<ButtonCategoryProps> = ({
  content,
  dispatch,
  ctx
  }): JSX.Element => {
  const state = useContext(ctx)
  const { filterAt } = state
  const handleClick = () => {
    dispatch({ type: "FILTER", payload: content })
  }

  return(
    <button className={`Button-category ${filterAt === content && "chosen"}`} onClick={handleClick}>
      {content}
    </button>
  )
}