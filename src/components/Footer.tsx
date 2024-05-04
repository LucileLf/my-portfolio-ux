import '../styles/Footer.css';
import { ImInstagram } from "react-icons/im";
import { ImFacebook } from "react-icons/im";
import { SlSocialYoutube } from "react-icons/sl";

const Footer = () => {
    return (
        <div className='footer-container'>
            <ul className='footer-links'>
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
            <div className='footer-challenge'>30 day challenge</div> 
        
            <ul className='footer-socials'>
                <li><ImInstagram style={{ fontSize: '32px' }}/></li>
                <li><ImFacebook style={{ fontSize: '32px' }}/></li>
                <li><SlSocialYoutube style={{ fontSize: '32px' }}/></li>
            </ul> 
        </div>
    )
}

export default Footer