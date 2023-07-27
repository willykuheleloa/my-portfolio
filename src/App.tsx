import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Entry from "./components/landing/Entry";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entry />} />
      </Routes>
    </Router>
  );
}

export default App;
