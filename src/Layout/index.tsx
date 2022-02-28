import React, { useContext } from "react";
import { Header } from "../Containers/Header";
import { LayoutProps } from "./types";

export const Layout: React.FC<LayoutProps> = ({ 
  children,
  dispatch,
  notificationsFlag,
  current,
  ctx }): JSX.Element => {
  const value = useContext(ctx)
  console.log("CURRENT", value.current)

  return(
    <React.Fragment>
      <Header 
        dispatch={dispatch}
        notificationsFlag={notificationsFlag}
        current={current} />
      {children}
    </React.Fragment>
  )
}