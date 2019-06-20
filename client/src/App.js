import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={() => <h1>Welcome to my E commerce.</h1>} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
