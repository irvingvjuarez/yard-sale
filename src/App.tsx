import React from 'react';
import { Layout } from "./Layout";
import './App.scss';

function App(): JSX.Element {
  return (
    <section className="App">
      <Layout>
        <h2>This is the App</h2>
      </Layout>
    </section>
  );
}

export default App;
