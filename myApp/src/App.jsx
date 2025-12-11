import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import {Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';


function App() {
    const [dark, setDark] = useState(false);
  return (
     <div className={dark ? "bg-gray-900 text-white min-h-screen" : "bg-white text-gray-900 min-h-screen"}>
     
      {/* <Router> */}
       <Navbar dark={dark} setDark={setDark} />  
        <Routes>
          <Route path="/" element={<Home dark={dark} />} />
          <Route path="/about" element={<About dark={dark} />} />
          <Route path="/projects" element={<Projects dark={dark} />} />
          <Route path="/skills" element={<Skills dark={dark} />} />
          <Route path="/contact" element={<Contact dark={dark} />} />
        </Routes>
      {/* </Router> */}
    </div>

  )
}

export default App
