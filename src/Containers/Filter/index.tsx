import React from "react";
import { FilterProps } from "./types";
import { ButtonCategory } from "../../Components/ButtonCategory";

export const Filter: React.FC<FilterProps> = ({ categories, dispatch, ctx }): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "FILTER", payload: e.target.value })
  }

  return(
    <section className="Filter">
      <select name="" id="" className="Filter__dropdown" onChange={handleChange}>
        {categories.map(category => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>

      {categories.map(category => (
        <ButtonCategory 
          key={category}
          content={category}
          dispatch={dispatch}
          ctx={ctx}
        />
      ))}
    </section>
  )
}