import React from "react";
// images and/or icons
import Logo from "../../Assets/Images/logo.png";
import Menu from "../../Assets/Icons/menu.png";
import Search from "../../Assets/Icons/search.png";

import { HeaderProps } from "./types";

// components
import { SearchInput } from "../../Components/SearchInput";
import { ButtonSmall } from "../../Components/ButtonSmall";

export const Header: React.FC<HeaderProps> = ({ dispatch, notificationsFlag }): JSX.Element => {
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
            <ButtonSmall isLink={false} source={Search} onclick={handleSearch} />

            <ButtonSmall 
              isLink={true}
              to="/menu"
              source={Menu}
              notificationsFlag={notificationsFlag} 
            />
            
          </nav>
        </React.Fragment>
      )}
    </header>
  )
}