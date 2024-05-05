// import React from 'react';
import retreats from '../assets/retreats.jpg'; // Import the image
import '../styles/Retreats.css';

const Retreats = () => {
    return (
        <div className='retreats-container' id="retreats" >
            <img className='retreats-image' src={retreats} alt="" />
            <div className='retreats-info'>
                <h1 className='retreats-title'>PARTICIPEZ A UNE RETRAITE</h1>
                <h2 className='retreats-subtitle'>3 - 10 OCTOBRE</h2>
                <p>
                    Commencez chaque matin avec la classe de vinyasa signature de Tim. Après un déjeuner du jardin à la table, Tim animera une classe de type atelier axée sur l'alignement, le travail de respiration et la philosophie du yoga. Ces retraites sont un moyen idéal pour apprendre, grandir et se connecter à la pratique et à une communauté partageant les mêmes idées.
                </p>
                <div className='retreat-btn'>En savoir plus</div>

            </div>
        </div>
    )
}

export default Retreats;