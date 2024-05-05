import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Retreats from './components/Retreats'
import Classes from './components/Classes'
import Footer from './components/Footer'
// import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='top-body'>
        <Navbar/>
        <Hero/>
      </div>
      <div className='bottom-body'>
        <Retreats/>
        
        <div className='grass-img'>
          <p>LE YOGA A CHANGE MA VIE</p>
          <p>UN JOUR A LA FOIS...</p>
        </div>
        <Classes/>
        
        <Footer/>
      </div>
    </>
  )
}

export default App
