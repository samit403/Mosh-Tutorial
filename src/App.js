import React from "react";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navbar";

function App() {
  return (
    <main className="container">
      <NavBar />
      <Movies />
    </main>
  );
}

export default App;
