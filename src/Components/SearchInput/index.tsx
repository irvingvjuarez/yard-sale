import React from "react";

import Search from "../../Assets/Icons/search.png";
import { SearchInputInterface } from "./types";

export const SearchInput: React.FC<SearchInputInterface> = ({setIsSearching, dispatch}): JSX.Element => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const handleBlur = (): void => setIsSearching(prev => !prev)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SEARCH", payload: e.target.value })
  }

  React.useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return(
    <div className="Search-input">
      <label htmlFor="search-field">
        <img src={Search} alt="" />
      </label>
      <input 
        type="text" 
        id="search-field" 
        placeholder="Search..." 
        ref={inputRef}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </div>
  )
}