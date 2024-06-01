// import './App.css'
// import Navbar from '@components/Navbar'
import About from '@components/About.tsx'
import Terms from '@components/Terms.tsx'
import Privacy from '@components/Privacy.tsx'
import Home from '@components/Home.tsx'
import Challenge from '@components/Challenge.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/challenge" element={<Challenge />} />
      </Routes>
    </Router>


  )
}

export default App
