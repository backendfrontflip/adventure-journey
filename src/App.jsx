import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from './components/HomePage'
import Header from './components/Header'
import Contact from "./components/Contact";
import Cities from "./components/Cities";
import Switzerland from './pages/Switzerland'
import Canada from './pages/Canada'
import Japan from './pages/Japan'
import Thailand from './pages/Thailand'
import Seasons from "./components/Seasons";


function App() {

  return (
    <Router basename="/adventure-journey">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/switzerland" element={<Switzerland />} />
          <Route path="/canada" element={<Canada />} />
          <Route path="/japan" element={<Japan />} />
          <Route path="/thailand" element={<Thailand />} />
          <Route path="/seasons" element={<Seasons />} />
        </Routes>
    </Router>
  );
}

export default App;