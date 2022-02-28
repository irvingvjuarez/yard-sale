import React from "react";
// images and/or icons
import Logo from "../../Assets/Images/logo.png";
import Menu from "../../Assets/Icons/menu.png";
import Search from "../../Assets/Icons/search.png";
import ArrowLeft from "../../Assets/Icons/arrow-left.svg";

import { HeaderProps } from "./types";
import { To } from "react-router-dom";

// components
import { SearchInput } from "../../Components/SearchInput";
import { ButtonSmall } from "../../Components/ButtonSmall";

// constants
import { locationRegex } from "../../constants";

export const Header: React.FC<HeaderProps> = ({ dispatch, notificationsFlag }): JSX.Element => {
  const [isSearching, setIsSearching] = React.useState<boolean>(false)
  const handleSearch = (): void => setIsSearching(prev => !prev)
  const currentPathname: string = window.location.pathname
  let title: string = "";
  if(currentPathname.length > 1){
    title = currentPathname.match(locationRegex)?.join(" ") as string
  }

  console.log(window.location.pathname)

  const renderMainHeader = (): JSX.Element => {
    if(isSearching){
      return(
        <SearchInput setIsSearching={setIsSearching} dispatch={dispatch}/>
      )
    }else{
      return(
        <React.Fragment>
          <a href="/" className="Header__logo">
            <img src={Logo} alt="" />
          </a>

          <nav className="Header__buttons-container">
            <ButtonSmall source={Search} onclick={handleSearch} />

            <ButtonSmall
              to="/menu"
              source={Menu}
              notificationsFlag={notificationsFlag}
              dispatch={dispatch}
            />
            
          </nav>
        </React.Fragment>
      )
    }
  }

  return (
    <header className="Header">
      {currentPathname.length > 1 ? (
        <React.Fragment>
          <ButtonSmall
            to="/"
            source={ArrowLeft}
            isCTA={true}
            dispatch={dispatch}
          />

          <h2 className="Header__title">
            {title}
          </h2>
        </React.Fragment>
      ) : (
        renderMainHeader()
      )}
    </header>
  )
}