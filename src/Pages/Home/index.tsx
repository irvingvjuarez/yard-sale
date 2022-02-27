import React from "react";

import { Filter } from "../../Containers/Filter";
import { Item } from "../../Components/Item";
import { Skeleton } from "../../Containers/Skeleton";
import { PageProps } from "../../globalTypes";

export const Home: React.FC<PageProps> = ({ state, dispatch }): JSX.Element => {

  const renderContent = (): JSX.Element => {
    if(state.filteredItems.length){
      return(
        <React.Fragment>
          <Filter categories={state.categories} dispatch={dispatch} />

          <section className="Home__items">
            {state.filteredItems.map(item => (
              <Item 
                key={item.id}
                id={item.id}
                name={item.title} 
                category={item.category} 
                price={item.price}
                rate={item.rating.rate}
                image={item.image}
                dispatch={dispatch}
                added={item.added as boolean}
              />
            ))}
          </section>
        </React.Fragment>
      )
    }else{
      if(state.searching){
        return(
          <React.Fragment>
            <Filter categories={state.categories} dispatch={dispatch} />
            <span className="Home__no-found">No items found</span>
          </React.Fragment>
        )
      }else{
        return(<Skeleton />)
      }
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