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
import recipes from './dishes.json'

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

  let whiteDishes = recipes.filter(dish => 'whites' in dish )
  let yolkDishes = recipes.filter(dish => 'yolks' in dish )

  yolkDishes.sort((a, b) => {
    return a.yolks - b.yolks
  })
  whiteDishes.sort((a,b) => {
    return a.whites - b.whites
  })

  const data = {
    labels: [
      'Yellow',
      'White'
    ],
    datasets: [{
      data: [yolks, whites],
      backgroundColor: [
        '#faf01b',
        '#FFFF'
      ],
      hoverBackgroundColor: [
        '#BFBF3F',
        '#F8F8FF'
      ]
    }]
  };

  return (
    <div>


    <h2>Eggs</h2>
    <div className="count">
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
    <div className="chart">
      <Doughnut data={data} />
    </div>
    <div className="option">
      <h3>Egg Whites</h3>
      <div className="inner__counter">
      <Button onClick={() => {whites > 1 ? setWhites(whites - 1) : setVisibility(true)}}>-</Button>
      <h3>{whites}</h3>
      <Button onClick={() => {setWhites(whites + 1)}}>+</Button>
      </div>
      <Button onClick={() => {setWhites(0)}}>Reset</Button>
    </div>
      <Alert style={{width: '40%', margin: '10px auto'}} color="warning" isOpen={visible}>Can't be less than 0!</Alert>
    </div>
    <hr></hr>
    <div className="lists">
      <div>
        {yolkDishes.map((element) => {
          if (yolks >= parseInt(element.yolks))
          return <p>{element.yolks} Yolk(s) {element.name}</p>
        })}
      </div>
      <div>
        {whiteDishes.map((element) => {
          if (whites >= parseInt(element.whites))
          return <p>{element.whites} White(s) {element.name}</p>
        })}
      </div>
    
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

