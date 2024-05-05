import '../styles/Footer.css';
import { ImInstagram } from "react-icons/im";
import { ImFacebook } from "react-icons/im";
import { SlSocialYoutube } from "react-icons/sl";

const Footer = () => {
    return (
        <div className='footer-container'>
            <ul className='footer-links'>
                <li>
                    <a href="">PRIVACY POLICY</a>
                </li>
                <li>
                    <a href="/terms-and-conditions">TERMS + CONDITIONS</a>
                </li>
            </ul>
           
            <ul className='footer-contact'>
                <div className='contact'>
                    <p>LE YOGA DE LILA</p>
                    <p>info@yogadelila.com</p>
                </div>
                <div className='footer-socials'>
                    <li><ImInstagram style={{ fontSize: '32px' }}/></li>
                    <li><ImFacebook style={{ fontSize: '32px' }}/></li>
                    <li><SlSocialYoutube style={{ fontSize: '32px' }}/></li>
                </div>
            </ul> 
        </div>
    )
}

export default Footer