import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import {useState, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import React from 'react';
import Checkout from './components/Checkout'
import Thanks from './components/Thanks'
import { ThemeProvider } from "@mui/system";
import theme from './theme'

export const config = {
  endpoint: `https://qkart-fbackend.onrender.com/api/v1`,
};

function App() {
  return (
    <React.StrictMode> 
      <div className="App">
        <Switch>
            <Route exact path='/' component={Products}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/checkout' component={Checkout}/>
            <Route path='/thanks' component={Thanks}/>
        </Switch>
      </div>
    </React.StrictMode>
  );
}

export default App;
