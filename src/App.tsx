// import './App.css'
// import Navbar from '@components/Navbar'
import About from '@components/About.tsx'
import Terms from '@components/Terms.tsx'
import Home from '@components/Home.tsx'
import Challenge from '@components/Challenge.tsx'
// import Hero from '@components/Hero'
// import Retreats from '@components/Retreats'
// import Classes from '@components/Classes'
// import Footer from '@components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"

function App() {

  return (
    <Router>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/Contact">About</Link>
        <Link to="/contact">Contact</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/challenge" element={<Challenge />} />
      </Routes>
    </Router>

    // <>
    //   <div className='top-body'>
    //     <Navbar/>
    //     <Hero/>
    //   </div>
    //   <div className='bottom-body'>
    //     <Retreats/>

    //     <div className='grass-img'>
    //       <p>LE YOGA A CHANGE MA VIE</p>
    //       <p>UN JOUR A LA FOIS...</p>
    //     </div>
    //     <Classes/>

    //     <Footer/>
    //   </div>
    // </>
  )
}

export default App
