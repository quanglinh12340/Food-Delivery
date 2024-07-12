import React, { useState } from "react";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOder from "./pages/PlaceOder";
import Footer from "./component/Footer";
import LoginPopup from "./component/LoginPopup";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
