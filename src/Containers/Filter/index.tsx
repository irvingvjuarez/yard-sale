import React from "react";
import { FilterProps } from "./types";

export const Filter: React.FC<FilterProps> = ({ categories, dispatch }): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "FILTER", payload: e.target.value })
  }

  return(
    <select name="" id="" className="Filter" onChange={handleChange}>
      {categories.map(category => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  )
}