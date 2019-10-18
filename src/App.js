import React from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Wizard from "./Components/Wizard/Wizard";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Wizard />
      <Header />
    </div>
  );
}

export default App;
