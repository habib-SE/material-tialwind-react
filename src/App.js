import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/home/Profile";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Profile />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
