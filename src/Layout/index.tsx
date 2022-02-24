import React from "react";
import { LayoutProps } from "../Interfaces";

export const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return(
    <React.Fragment>
      <h2>Here is the Layout</h2>
      {children}
    </React.Fragment>
  )
}