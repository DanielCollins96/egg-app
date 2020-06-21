import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Button, Alert } from 'reactstrap';

import Navbar from './components/navbar';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/whites">
            <Whites />
          </Route>
          <Route path="/yolks">
            <Yolks />
          </Route>
          <Route path="/recipes">
            <Recipes />
          </Route>
          <Route path="/submit">
            <Submit />
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

const Home = () => {
  const [count, setCount] = useState(0)
  const [visible, setVisibility] = useState(false)

  const increment = () => {
    setVisibility(false)
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 0) 
      return setCount(count - 1)
    setVisibility(true)
  }

  const reset = () => {
    setVisibility(false)
    setCount(0)
  }
  return (
    <div class="count">

    <h2>Home</h2>
    <div>
      <h3>Current Count: {count}</h3>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <Button onClick={() => {reset()}}>Reset</Button>
      <Alert style={{width: '40%', margin: '10px auto'}} color="warning" isOpen={visible}>Can't be less than 0!</Alert>
    </div>
    </div>
  );
}

function Whites() {
  return <h2>Whites</h2>;
}

function Yolks() {
  return <h2>Yolks</h2>;
}

function Recipes() {
  return <h2>Recipes</h2>;
}

function Submit() {
  return <h2>Submit</h2>;
}

