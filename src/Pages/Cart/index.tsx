import React from "react";
import { ButtonCTA } from "../../Components/ButtonCTA";
import { Product } from "../../Components/Product";
import { PageProps, ActionType } from "../../globalTypes";
import { priceInterface } from "./types";

export const Cart: React.FC<PageProps> = ({ state, dispatch }): JSX.Element => {
  const { shoppingCart } = state

  React.useEffect(() => {
    if(shoppingCart.length) {
      shoppingCart.forEach(product => {
        console.log(product.title, product.quantity)
      })
    }
  }, [shoppingCart])

  return(
    <section className="Cart">
      {shoppingCart.length ? (
        <section className="Cart__content">
          <article className="Cart__products">
            {shoppingCart.map(product => (
              <Product 
                key={product.id} 
                title={product.title}
                price={product.price}
                quantity={product.quantity as number}
                img={product.image}
                dispatch={dispatch as React.Dispatch<ActionType>}
                id={product.id}
              />
            ))}
          </article>

          <article className="Cart__info">
            <div className="Cart__total">
              <div className="Cart__total--subtotal">
                <h2>Subtotal</h2>
                <span>$XXXXX</span>
              </div>

              <div className="Cart__total--subtotal">
                <h2>Taxes</h2>
                <span>$XXXXXX</span>
              </div>

              <div className="Cart__total--total">
                <h2>Total</h2>
                <span>$XXXXXXX</span>
              </div>
            </div>

            <ButtonCTA content="Proceed to Checkout" />
          </article>
        </section>
      ) : (
        <span className="Cart__msg">The cart is empty</span>
      )}
    </section>
  )
}