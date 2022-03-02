import React, { createContext, useReducer } from 'react';
import { Layout } from "./Layout";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from "./Pages/Home";
import { Menu } from "./Pages/Menu";
import { Cart } from "./Pages/Cart";
import { Product } from './Pages/Product';

// utils
import { initialState, reducer } from "./globalState";

// css
import './App.scss';
import { StateInterface } from './globalTypes';


function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState())
  const Context = createContext(state)

  React.useEffect(() => {
    try{
      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => dispatch({ type: "ADD_INITIAL_ITEMS", payload: data }))
    }catch(err){
      dispatch({ type: "ERROR" })
    }
  }, [])

  return (
    <Context.Provider value={state}>
      <section className="App">
        <BrowserRouter>
          <Layout dispatch={dispatch} ctx={Context}>
            <Routes>
              <Route path="/" element={
                <Home
                  state={state as StateInterface}
                  dispatch={dispatch}
                  ctx={Context}
                />
              }/>
              <Route path="/menu" element={
                <Menu 
                  state={state as StateInterface}
                  dispatch={dispatch}
                />
              }/>
              <Route path='/shopping-cart' element={
                <Cart 
                  state={state as StateInterface}
                  dispatch={dispatch}
                />
              }/>
              <Route path='/products/:title' element={<Product />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </section>
    </Context.Provider>
  );
}

export default App;
