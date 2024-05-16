// import React from 'react';
import '../styles/Challenge.css';
import Navbar from './Navbar'
import Footer from './Footer';
import Form from './Form';
import FAQ from './FAQ';
// import React from 'react';

const Challenge = () => {

    return (
        <div className="challenge-container">
          <div className='challenge-top-body'>  {/* 100vh */}
            <Navbar/>
            <div className='challenge-sign-up'>
                SCROLL DOWN TO SIGN UP
            </div>

          </div>
          <div className='challenge-bottom-body'> {/* 100vh */}
            <div className='form-container'>
                <Form/>
            </div>
            <div className='faq-container'>
                <FAQ/>
            </div>
            {/* <Retreats/>

            <div className='grass-img'>
              <p>LE YOGA A CHANGE MA VIE</p>
              <p>UN JOUR A LA FOIS...</p>
            </div>
            <Classes/>
             */}
            <Footer/>
          </div>
          {/* <Testimonies/> */}
          {/* <div className='challenge-footer-body'>  20vh */}
          {/* </div> */}
        </div>
    )
}

export default Challenge;
