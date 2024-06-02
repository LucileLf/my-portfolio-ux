import { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import { ImInstagram } from "react-icons/im";
import { ImFacebook } from "react-icons/im";
import { SlSocialYoutube } from "react-icons/sl";
// import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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

    const toggleMenu = () => {
      setIsOpen(!isOpen);
  };


    const scrollToSection = (section: string) => {
      console.log(`scrolling to ${section}`);

      const domSection = document.getElementById(section);
      if (domSection) {
        console.log("same page");
          // window.scrollTo({
          //     top: domSection.offsetTop,
          //     behavior: 'smooth'
          // });
          domSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.log("need to change page");

          // Navigate to the target page and scroll to the section after the page has loaded
          window.location.href = `/#${section}`;
          const domSection = document.getElementById(section);
          console.log("scrolling now");

          domSection?.scrollIntoView({ behavior: 'smooth' });

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
                <li>
                    <a href='/about'>mon histoire</a>
                </li>
            </ul>
            <div className='navbar-challenge-btn'>
                <a href="challenge">
                  Challenge: 30 jours de yoga
                </a>
            </div>



            <div className="hamburger-menu" onClick={toggleMenu}>
                &#9776; {/* This represents the hamburger icon */}
            </div>
            {isOpen && (
                <div className="mobile-nav">
                    <a href="/" onClick={toggleMenu}>accueil</a>
                    <a href="/challenge" onClick={toggleMenu}>challenge</a>
                    <a href="/about" onClick={toggleMenu}>mon histoire</a>
                    <a href="/privacy-policy" onClick={toggleMenu}>politique de confidentialité</a>
                    <a href="/terms-and-conditions" onClick={toggleMenu}>conditions générales d'utilisation</a>
                    <div className='mobile-nav-socials'>
                        <li><ImInstagram style={{ fontSize: '32px' }}/></li>
                        <li><ImFacebook style={{ fontSize: '32px' }}/></li>
                        <li><SlSocialYoutube style={{ fontSize: '32px' }}/></li>
                    </div>
                    <a href="mailto:info@yogadelila.com">info@yogadelila.com</a>

                </div>
            )}

            <div className="title">
              <p>LE YOGA DE LILA</p>
            </div>


        </div>
    );
};

export default Navbar;
