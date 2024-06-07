// import './App.css'
// // import Navbar from '@components/Navbar'
import Croissants from '@components/Croissants'
// import Croissants from './components/Croissants.tsx'
import Sweats from '@components/Sweats'
import Nutrition from '@components/Nutrition'
import Home from '@components/Home.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<Croissants />} />
        <Route path="/2" element={<Sweats />} />
        <Route path="/3" element={<Nutrition />} />
      </Routes>
    </Router>


  )
}

export default App
