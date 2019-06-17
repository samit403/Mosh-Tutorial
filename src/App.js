import React from "react";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";

function App() {
  return (
    <main className="container">
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/" component={Movies} />
        </Switch>
      </div>
    </main>
  );
}

export default App;
