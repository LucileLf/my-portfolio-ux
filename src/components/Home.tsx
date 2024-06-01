 1// import React from 'react';
import Navbar from './Navbar'
// import Bio from './Bio'
import '../styles/Home.css';
import Hero from './Hero';
import Retreats from './Retreats';
import Classes from './Classes';
import Footer from './Footer';
import '../styles/Home.css';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    const hash = window.location.hash.substring(1); // Get the hash part without the '#'
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  return (
      <div className='home-container'> {/* 305vh */}
        <div className='navbar'> {/* 10vh */}
          <Navbar/>
        </div>

        <div className='home-top-body'> {/* 125vh */}
          <Hero/>
        </div>
        <div className='home-bottom-body'> {/* 155vh */}

        <div id="retreats" >
          <Retreats/> {/* 65vh */}
        </div>

          <div className='grass-img'>{/* 40vh */}
            <p>LE YOGA A CHANGE MA VIE</p>
            <p>UN JOUR A LA FOIS...</p>
          </div>

          <div id="classes" >
            <Classes/> {/* 50vh */}
          </div>
        </div>
        <div className="home-footer-container">
          <Footer/> {/* 20vh */}

        </div>
      </div>
  )
}

export default Home
