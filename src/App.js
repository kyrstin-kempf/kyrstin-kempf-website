import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kyrstin-kempf" element={ <Home /> } />
        <Route path="/kyrstin-kempf/about" element={ <About /> } />
        <Route path="/kyrstin-kempf/portfolio" element={ <Portfolio /> } />
        <Route path="/kyrstin-kempf/contact" element={ <Contact /> } />
        <Route path="/kyrstin-kempf/portfolio/:id" element={ <OneProject /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
