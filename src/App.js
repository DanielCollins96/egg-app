import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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

function Home() {
  return <h2>Home</h2>;
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

