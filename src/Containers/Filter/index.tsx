import React, { useContext } from "react";
import { FilterProps } from "./types";
import { ButtonCategory } from "../../Components/ButtonCategory";

export const Filter: React.FC<FilterProps> = ({ dispatch, ctx, isInHeader }): JSX.Element => {
  const state = useContext(ctx)
  const { categories, filterAt, searching } = state
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "FILTER", payload: e.target.value })
  }

  return(
    <section className="Filter">
      <select defaultValue={searching ? "All items" : filterAt} className="Filter__dropdown" onChange={handleChange}>
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
          to={isInHeader ? "/" : ""}
        />
      ))}
    </section>
  )
}