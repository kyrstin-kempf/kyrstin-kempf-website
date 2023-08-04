import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import OneProject from "./pages/OneProject";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect( () => {
    const fetchProjects = async () => {
      const response = await fetch('https://my-json-server.typicode.com/kyrstin-kempf/kyrstin-kempf.github.io/projects')
      const data = await response.json();
      setProjects(data);
    }

    fetchProjects();
  }, []);

  return (
    <BrowserRouter basename="/">
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/portfolio" element={ <Portfolio projects={projects} /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/portfolio/:id" element={ <OneProject projects={projects} /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
