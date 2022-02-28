import React from "react";
import { Header } from "../Containers/Header";
import { LayoutProps } from "./types";

export const Layout: React.FC<LayoutProps> = ({ 
  children,
  dispatch,
  notificationsFlag,
  current }): JSX.Element => {
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