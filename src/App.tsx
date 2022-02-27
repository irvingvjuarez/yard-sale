import React, { useReducer } from 'react';
import { Layout } from "./Layout";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from "./Pages/Home";

// utils
import { initialState, reducer } from "./globalState";

// css
import './App.scss';
import { StateInterface } from './globalTypes';

function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState())

  React.useEffect(() => {
    // try{
    //   fetch('https://fakestoreapi.com/products')
    //   .then(res => res.json())
    //   .then(data => dispatch({ type: "ADD_INITIAL_ITEMS", payload: data }))
    // }catch(err){
    //   dispatch({ type: "ERROR" })
    // }
  }, [])

  return (
    <section className="App">
      <Layout 
        dispatch={dispatch}
        notificationsFlag={state.shoppingCart.length}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home state={state as StateInterface} dispatch={dispatch as React.DispatchWithoutAction} />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </section>
  );
}

export default App;
