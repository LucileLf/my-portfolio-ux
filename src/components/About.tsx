// import React from 'react';
import Navbar from './Navbar'
import Bio from './Bio'
import '../styles/About.css';
// import '../App.css';
import Footer from './Footer';

function About() {

  return (
        <div className='about-body'>
          <div className='navbar-container'>
            <Navbar/>

          </div>
            <Bio/>
            <Footer/>
        </div>
  )
}

export default About
