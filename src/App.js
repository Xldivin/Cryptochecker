import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import CoinPage from "./Routes/CoinPage";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/" element={<CoinPage />}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
