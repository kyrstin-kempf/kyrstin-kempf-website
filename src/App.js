import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import OneProject from "./pages/OneProject";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/portfolio" element={ <Portfolio /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/portfolio/:id" element={ <OneProject /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
