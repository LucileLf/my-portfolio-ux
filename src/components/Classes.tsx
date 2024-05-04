import '../styles/Classes.css';
import vinyasa from '../assets/vinyasa.jpg'; 
import children from '../assets/children.jpg'; 
import accro from '../assets/accro.jpg'; 

import { useEffect, useState } from 'react';

const Classes = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
        showSlides(slideIndex);
    }, [slideIndex]);

    // Next/previous controls
    const plusSlides = (n: number) => {
        setSlideIndex(prevIndex => prevIndex + n);
    };

    // Thumbnail image controls
    // const currentSlide = (n: number) => {
    //     setSlideIndex(n);
    // };

    const showSlides = (n: number) => {
        let i;
        let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
        // let dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
        if (n > slides.length) { setSlideIndex(1); }
        if (n < 1) { setSlideIndex(slides.length); }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        slides[n-1].style.display = "flex";
        // dots[n-1].className += " active";
    };

    return (
        <>
        
            <div className='classes-container'>

                <div className="mySlides fade">
                    {/* <div className="numbertext">1 / 3</div> */}
                    <div className='classes-image'>
                        <img className='image' src={vinyasa} alt="" />
                    </div>
                    <div className='classes-info'>
                        <h1 className='classes-title'>YOGA VINYASA</h1>
                        <p className='classes-description'>
                            Le yoga Vinyasa est une pratique dynamique et fluide qui synchronise le mouvement avec la respiration. En se concentrant sur des transitions harmonieuses entre les poses, cette forme de yoga favorise à la fois la force, la flexibilité et la relaxation mentale. Chaque mouvement est guidé par la respiration, ce qui permet aux pratiquants de se connecter profondément à leur corps et à leur esprit tout au long de la séance, créant ainsi une expérience méditative en mouvement.
                        </p>
                        <div className='classes-btn'>INSCRIPTIONS</div>
                    </div> 
                </div>

                <div className="mySlides fade">
                    {/* <div className="numbertext">1 / 3</div> */}
                    <img className='classes-image' src={children} alt="" />
                    <div className='classes-info'>
                        <h1 className='classes-title'>YOGA EN FAMILLE</h1>
                        <p className='classes-description'>
                            Les cours de yoga en famille offrent une occasion unique pour les parents et les enfants de se connecter et de se détendre ensemble. Ces séances sont conçues pour être amusantes et accessibles à tous les âges, offrant un mélange équilibré de poses de yoga, de jeux interactifs et de moments de relaxation. En pratiquant le yoga en famille, les participants renforcent leurs liens familiaux tout en cultivant la conscience corporelle, la confiance en soi et la gestion du stress.                        
                        </p>
                        <div className='classes-btn'>Inscriptions</div>
                    </div> 
                </div>

                <div className="mySlides fade">
                    {/* <div className="numbertext">1 / 3</div> */}
                    <img className='classes-image' src={accro} alt="" />
                    <div className='classes-info'>
                        <h1 className='classes-title'>ACRO YOGA</h1>
                        <p className='classes-description'>
                        L'acro yoga est une pratique ludique et collaboratrice qui mélange le yoga traditionnel avec des acrobaties et des techniques de massage thaïlandais. En partenariat avec un partenaire, les participants explorent des postures acrobatiques, des élévations et des transitions fluides qui exigent confiance, communication et coordination. Ce style de yoga favorise non seulement la force physique et la souplesse, mais aussi la connexion émotionnelle et la confiance mutuelle entre les partenaires.
                        </p>
                        <div className='classes-btn'>Inscriptions</div>
                    </div> 
                </div>

            </div>
            <div className='arrows'>
                <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
            </div>

            {/* <div className='dots'>
                <span className="dot"  onClick={() => currentSlide(1)}></span>
                <span className="dot" onClick={() => currentSlide(2)}></span>
                <span className="dot" onClick={() => currentSlide(3)}></span>
            </div>  */}
        </>
    )
}

export default Classes;
