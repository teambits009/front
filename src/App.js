import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Customer from "./pages/customer/Customer";
import Admin from "./pages/admin/components/Admin";
import LandingPage from "./pages/landing/components/LandingPage";
import Vendors from "./pages/Vendors/Vendors";
import Login from "./pages/login/Login";
import Signin from "./pages/signin/Signup";
import Printing from "./pages/printing/Printing";
import ShippingService from "./pages/shipping/Shipping";
import MarketPlace from "./pages/marketPlace/MarketPlace";
import Checkout from "./pages/marketPlace/checkout/Checkout";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/printing" element={<Printing />} />
        <Route path="/shipping" element={<ShippingService />} />
        <Route path="/market-place" element={<MarketPlace />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
