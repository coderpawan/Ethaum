import React from "react";
import LandingPage from "./Pages/Landing Page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
