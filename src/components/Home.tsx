// import React from 'react';
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

export default Home