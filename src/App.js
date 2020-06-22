import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Button, Alert } from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';

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
  const [yolks, setYolks] = useState(0)
  const [whites, setWhites] = useState(0)
  const [visible, setVisibility] = useState(false)

  const increment = () => {
    setVisibility(false)
    // setCount(count + 1)
  }

  const decrement = () => {
    // if (count > 0) 
    //   return setCount(count - 1)
    setVisibility(true)
  }

  const reset = () => {
    setVisibility(false)
    // setCount(0)
  }
  const data = {
    labels: [
      'White',
      'Yellow'
    ],
    datasets: [{
      data: [whites, yolks],
      backgroundColor: [
      '#FFFF',
      '#faf01b',
      ],
      hoverBackgroundColor: [
        '#F8F8FF',
      '#BFBF3F'
      ]
    }]
  };
  return (
    <div className="count">

    <h2>Eggs</h2>
    <div className="option">
      <h3>Egg Whites</h3>
      <div className="inner__counter">
      <Button onClick={() => {setWhites(whites - 1)}}>-</Button>
      <h3>{whites}</h3>
      <Button onClick={() => {setWhites(whites + 1)}}>+</Button>
      </div>
      <Button onClick={() => {setWhites(0)}}>Reset</Button>
    </div>
    <div className="option">
      <h3>Egg Yolks</h3>
      <div className="inner__counter">
      {/* <Button onClick={decrement}>-</Button> */}
      <Button onClick={() => {setYolks(yolks -1)}}>-</Button>
      <h3>{yolks}</h3>
      <Button onClick={() => {setYolks(yolks + 1)}}>+</Button>
      </div>
      <Button onClick={() => {setYolks(0)}}>Reset</Button>
    </div>
      <Alert style={{width: '40%', margin: '10px auto'}} color="warning" isOpen={visible}>Can't be less than 0!</Alert>
    <hr></hr>
    <div className="chart">
      <Doughnut data={data} />
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

