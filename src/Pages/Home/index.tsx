import React from "react";

import { Filter } from "../../Containers/Filter";
import { Item } from "../../Components/Item";
import { HomeProps } from "./types";

export const Home: React.FC<HomeProps> = ({ state, dispatch }): JSX.Element => {
  const renderContent = (): JSX.Element => {
    if(state.items.length){
      return(
        <React.Fragment>
          <Filter />
          <section className="Home__items">
            {state.items.map(item => (
              <Item key={item.id} />
            ))}
          </section>
        </React.Fragment>
      )
    }else{
      return(<h2>Loading...</h2>)
    }
  }

  return(
    <section className="Home">
      {state.error ? (
        <h2>Oops, seems like there was an error. Try later</h2>
      ) : (
        renderContent()
      )}

    </section>
  )
}