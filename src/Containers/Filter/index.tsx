import { FilterProps } from "./types";

export const Filter: React.FC<FilterProps> = ({ categories }): JSX.Element => {
  return(
    <select name="" id="" className="Filter">
      {categories.map(category => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  )
}