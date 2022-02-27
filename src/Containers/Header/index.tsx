import React from "react";
// images and/or icons
import Logo from "../../Assets/Images/logo.png";
import Menu from "../../Assets/Icons/menu.png";
import Search from "../../Assets/Icons/search.png";

import { HeaderProps } from "./types";

// components
import { SearchInput } from "../../Components/SearchInput";

export const Header: React.FC<HeaderProps> = ({ dispatch }): JSX.Element => {
  const [isSearching, setIsSearching] = React.useState<boolean>(false)
  const handleSearch = (): void => setIsSearching(prev => !prev)

  return (
    <header className="Header">
      {isSearching ? (
        <SearchInput setIsSearching={setIsSearching} dispatch={dispatch}/>
      ) : (
        <React.Fragment>
          <a href="/" className="Header__logo">
            <img src={Logo} alt="" />
          </a>

          <nav className="Header__buttons-container">
            <button onClick={handleSearch} >
              <img src={Search} alt="" />
            </button>

            <button>
              <a href="#">
                <img src={Menu} alt="" />
              </a>
            </button>
          </nav>
        </React.Fragment>
      )}
    </header>
  )
}