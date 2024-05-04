import '../styles/Hero.css';

const Hero = () => {
    return (
        <div className='hero-container'>
            {/* <img className='hero-image' src="./assets/bakground.jpg" alt="" /> */}
            <h1 className='titre'>LE YOGA DE LILA</h1>
            <p className='slogan'>"Bougez librement et ressentez la différence."</p>
            <div className='challenge-btn'>Challenge: 30 jours de yoga</div>
        </div>
    )
}

export default Hero;