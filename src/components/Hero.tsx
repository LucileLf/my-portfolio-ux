import '../styles/Hero.css';

const Hero = () => {
    return (
        <div className='hero-container'>
            {/* <img className='hero-image' src="./assets/bakground.jpg" alt="" /> */}
            <h1 className='titre'>LE YOGA DE LILA</h1>
            <p className='slogan'>"Trouvez l'harmonie intérieure avec notre yoga, une respiration à la fois."</p>
            <div className='challenge-btn'>
                <a href="/challenge">
                    Challenge: 30 jours de yoga
                </a>
            </div>
        </div>
    )
}

export default Hero;


