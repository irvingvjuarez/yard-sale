import React from "react";

import Search from "../../Assets/Icons/search.png";
import { SearchInputInterface } from "../../Interfaces";

export const SearchInput: React.FC<SearchInputInterface> = ({setIsSearching}): JSX.Element => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const handleBlur = (): void => setIsSearching(prev => !prev)

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
      />
    </div>
  )
}