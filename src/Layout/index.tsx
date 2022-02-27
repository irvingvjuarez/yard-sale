import React from "react";
import { Header } from "../Containers/Header";
import { LayoutProps } from "./types";

export const Layout: React.FC<LayoutProps> = ({ 
  children,
  dispatch,
  notificationsFlag }): JSX.Element => {
  return(
    <React.Fragment>
      <Header 
        dispatch={dispatch}
        notificationsFlag={notificationsFlag} />
      {children}
    </React.Fragment>
  )
}