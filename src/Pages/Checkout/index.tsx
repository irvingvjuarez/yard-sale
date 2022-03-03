import { Fragment, useRef, useState } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom"
import { CheckoutInput } from "../../Components/CheckoutInput";
import { ButtonCTA } from "../../Components/ButtonCTA";
import { ILocalState, initialLocalState } from "./types";
import { PageProps } from "../../globalTypes";

import Linkedin from "../../Assets/Icons/linkedin.png";
import Twitter from "../../Assets/Icons/twitter.png";
import Github from "../../Assets/Icons/github.png";

export const Checkout: React.FC<PageProps> = ({ state, dispatch}): JSX.Element => {
  const { totalAmount } = state
  const navigate: NavigateFunction = useNavigate()
  const [localState, setLocalState] = useState<ILocalState>(initialLocalState)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const errorRef = useRef<HTMLSpanElement>(null)
  const handleConfirmation = () => {
    setIsModalOpen(false)
    dispatch && dispatch({ type: "RESET" })
    navigate("/")
  }

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

    if(flag){
      errorRef.current?.classList.remove("error")
      setIsModalOpen(true)
    }else{
      errorRef.current?.classList.add("error")
      window.scroll({
        top: 10000,
        behavior: 'smooth'
      });
    }
  }

  return(
    <Fragment>

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
          <span className="Checkout__error" ref={errorRef}>
            Please filled all the text boxes above
          </span>
        </form>

        <button className="Checkout__cta" onClick={handleSubmit}>
          <h2>Pay ${totalAmount}</h2>
        </button>
      </section>

      {isModalOpen && (
        <section className="Modal">
          <div className="Modal__card">
            <h2>
              <span>The author of this app is not accountable for the use of the provided information :')</span>
              Follow me on my social media to know more about my work
            </h2>
            <div className="Modal__card--footer">
              <ul>
                <li>
                  <a href="https://twitter.com/juarez1_irving">
                    <img src={Twitter} alt="twitter" />
                  </a>
                </li>

                <li>
                  <a href="https://github.com/IrvingJuarez">
                  <img src={Github} alt="github" />
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/irvingdevjuarez/">
                  <img src={Linkedin} alt="linkedin" />
                  </a>
                </li>
              </ul>

              <ButtonCTA content="OK" onclick={handleConfirmation} />
            </div>
          </div>
        </section>
      )}
    </Fragment>
  )
}