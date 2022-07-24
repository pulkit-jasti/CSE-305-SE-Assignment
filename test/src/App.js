import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Orders from "./Orders";
import Customer from "./Customer";
import Tester from "./Tester";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/orders" element={<Orders />} />

          <Route path="/customer" element={<Customer />} />

          <Route path="/tester" element={<Tester />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
