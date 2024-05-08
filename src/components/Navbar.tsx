// import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import { ImInstagram } from "react-icons/im";
import { ImFacebook } from "react-icons/im";
import { SlSocialYoutube } from "react-icons/sl";
// import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    const scrollToSection = (section: string) => {
        const domSection = document.getElementById(section);
        if (domSection) {
            window.scrollTo({
                top: domSection.offsetTop,
                behavior: 'smooth'
            });
        }
    };


    return (
        <div className={`navbar ${scrolling ? 'scrolling' : ''}`}>
            <ul className='navbar-socials'>

                <li>
                    <a href="http://instagram.com" target='_blank'>
                        <ImInstagram style={{ fontSize: '32px', color: 'white' }}/>
                    </a>
                </li>
                <li>
                    <a href="http://facebook.com" target='_blank'> 
                        <ImFacebook style={{ fontSize: '32px', color: 'white'}}/>
                    </a>
                </li>
                <li>
                    <a href="http://youtube.com" target='_blank'>
                        <SlSocialYoutube style={{ fontSize: '32px', color: 'white' }}/>
                    </a>
                </li>
                
            </ul> 
            <ul className='navbar-links'>
                <li>
                <a href='/'>accueil</a>
                </li>
                <li>
                    <button onClick={(): void => scrollToSection('retreats')}>retraites</button>
                </li>
                <li>
                    <button onClick={(): void => scrollToSection('classes')}>cours</button>
                </li>
                {/* <li>
                    <button>calendrier</button>
                </li> */}
                <li>
                    <a href='/about'>mon histoire</a>
                </li>
            </ul>
            <div className='navbar-challenge-btn'>
                <a href="challenge">
                    challenge 30 jours    
                </a>    
            </div> 
        
        </div>
    )
}

export default Navbar