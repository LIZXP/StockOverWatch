import React from "react";
import { Route, Routes } from "react-router";
import BuyerNest from "./components/buyerNest/BuyerNest";
import Sidebar from "./components/buyerNest/sidebar/Sidebar";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buyernest" element={<Sidebar />}>
          <Route index element={<BuyerNest />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
