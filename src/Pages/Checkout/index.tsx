import { useState } from "react";
import { CheckoutInput } from "../../Components/CheckoutInput";
import { ILocalState, initialLocalState } from "./types";

export const Checkout: React.FC = (): JSX.Element => {
  const [localState, setLocalState] = useState<ILocalState>(initialLocalState)

  const handleChange = (evt: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setLocalState(prev => ({
      ...prev,
      [evt.target.id]: evt.target.value
    }))
  }

  const handleSubmit = () => {
    let flag: boolean = true

    Object.values(localState).forEach(value => {
      if(!value) flag = false
    })

    console.log(flag)
  }

  return(
    <section className="Checkout">
      <form className="Checkout__form">
        <CheckoutInput
          name="Full Name"
          id="fullName"
          type="text"
          placeholder="John Doe"
          onchange={handleChange}
        />
        <CheckoutInput
          name="Email"
          id="email"
          type="email"
          placeholder="john@doe.com"
          onchange={handleChange}
        />
        <CheckoutInput
          name="Country"
          id="country"
          type="select"
          onchange={handleChange}
        />
        <CheckoutInput
          name="Address"
          id="address"
          type="text"
          placeholder="Street address"
          onchange={handleChange}
        />
        <CheckoutInput
          name="Card Number"
          id="cardNumber"
          type="number"
          placeholder="1234 1234 1234 1234"
          onchange={handleChange}
        />
        <CheckoutInput
          name="Expiration Date"
          id="expirationDate"
          type="number"
          placeholder="MM / YY"
          onchange={handleChange}
        />
        <CheckoutInput
          name="Zip code"
          id="zipCode"
          type="number"
          placeholder="11655"
          onchange={handleChange}
        />
      </form>

      <button className="Checkout__cta" onClick={handleSubmit}>
        <h2>Pay $XXXXX</h2>
      </button>
    </section>
  )
}