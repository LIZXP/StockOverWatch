import React from "react";
import { Route, Routes } from "react-router";
import StockList from "./components/buyerNest/StockList";
import Sidebar from "./components/buyerNest/sidebar/Sidebar";
import Home from "./components/home/Home";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buyernest" element={<Sidebar />}>
          <Route index element={<StockList />} />
          <Route path="1" element={<h2>hello world</h2>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
