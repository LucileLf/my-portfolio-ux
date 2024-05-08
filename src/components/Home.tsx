 1// import React from 'react';
import Navbar from './Navbar'
// import Bio from './Bio'
import '../styles/Home.css';
import Hero from './Hero';
import Retreats from './Retreats';
import Classes from './Classes';
import Footer from './Footer';
import '../styles/Home.css';

function Home() {

  return (
      <div className='home-container'> {/* 305vh */}
        <div className='navbar'> {/* 10vh */}
          <Navbar/>
        </div>

        <div className='home-top-body'> {/* 125vh */}
          <Hero/>
        </div>
        <div className='home-bottom-body'> {/* 155vh */}
          <Retreats/> {/* 65vh */}
          <div className='grass-img'>{/* 40vh */}
            <p>LE YOGA A CHANGE MA VIE</p>
            <p>UN JOUR A LA FOIS...</p>
          </div>
          <Classes/> {/* 50vh */}
        </div>
        <Footer/> {/* 20vh */}
      </div>
  )
}

export default Home
