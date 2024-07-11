import React from "react";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOder from "./pages/PlaceOder";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/oder" element={<PlaceOder />} />
      </Routes>
    </div>
  );
};

export default App;
