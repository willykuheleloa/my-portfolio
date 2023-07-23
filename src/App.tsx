import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Entry from "./components/landing/Entry";
import HomeScreen from "./components/landing/HomeScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/landing" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
