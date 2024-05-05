import React from 'react';
import '../styles/Bio.css';
import profile from '../assets/profile.png'; 


const Bio = () => {
    return (
        <div className='bio-container'>
            <div className='bio-image'>
                <img className='profile-image' src={profile} alt="" />
            </div>
        
            <div className='bio-text'>
                <h1>Bonjour, je suis Lila...</h1>
                <p>
                    Mon aventure dans le yoga a débuté pendant mes études universitaires. Initialement intimidée et raide comme un piquet, j'ai découvert une passion profonde pour le yoga dès ma première séance. Après avoir obtenu mon diplôme, j'ai approfondi mes connaissances avec Manon Dupont, une enseignante renommée de Provence. Guidée par ses enseignements, j'ai exploré différentes approches du yoga, développant ainsi ma propre pratique. Aujourd'hui, en tant qu'enseignante de yoga, je suis reconnaissante de pouvoir partager ma passion avec d'autres et de les accompagner dans leur voyage intérieur.
                </p>
            </div>

        </div>
    )
}

export default Bio;