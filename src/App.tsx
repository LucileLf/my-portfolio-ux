import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Retreats from './components/Retreats'
import Classes from './components/Classes'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='upper-body'>
        <Navbar/>
        <Hero/>
      </div>
      <div>
        <Retreats/>
        
        <div className='grass-img'>
          <p>YOGA SLOWLY CHANGED MY LIFE</p>
          <p>ONE DAY AT A TIME...</p>
        </div>
        <Classes/>
        
        <Footer/>
      </div>
    </>
  )
}

export default App
