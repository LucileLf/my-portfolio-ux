// import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import { ImInstagram } from "react-icons/im";
import { ImFacebook } from "react-icons/im";
import { SlSocialYoutube } from "react-icons/sl";

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
    
    return (
        <div className={`navbar ${scrolling ? 'scrolling' : ''}`}>
            <ul className='navbar-socials'>
                <li><ImInstagram style={{ fontSize: '32px' }}/></li>
                <li><ImFacebook style={{ fontSize: '32px' }}/></li>
                <li><SlSocialYoutube style={{ fontSize: '32px' }}/></li>
            </ul> 
            <ul className='navbar-links'>
                <li>
                    <a href="">home</a>
                </li>
                <li>
                    <a href="">classes</a>
                </li>
                <li>
                    <a href="">retreats</a>
                </li>
                <li>
                    <a href="">calendar</a>
                </li>
                <li>
                    <a href="">about</a>
                </li>
            </ul>
            <div className='navbar-challenge-btn'>30 day challenge</div> 
        
        </div>
    )
}

export default Navbar