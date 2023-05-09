import About from "./About";
import "./App.css";
import Home from "./Home";
import Notfound from "./Notfound";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
