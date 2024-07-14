import React from "react";
import LandingPage from "./Pages/Landing Page";
import SignUp from "./Pages/Signup Page";
import SignIn from "./Pages/SignIn";
import Price from "./Pages/Price";
import ProductDetails from "./Pages/ProductDetails";
import Product from "./Pages/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/price" element={<Price />} />
          <Route exact path="/products/:tag" element={<Product />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
