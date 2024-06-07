// import React from 'react';
import '../styles/Home.css';
// import './mediaqueries.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import profile from '../assets/dev.jpeg'
import croissants from '../assets/croissants.png'
import sweat from '../assets/sweat.png'
import nutrition from '../assets/nutrition.png'
import linkedin from "..//assets/linkedin.png"
// import arrow from '../assets/arrow.png'

function Home() {
  return (
    <div className="body">
      <Navbar/>

      <section id="profile">
        <div className="section__pic-container">
          {/* <img className="profile-picture" src="../assets/dev.jpeg" alt="Lucile L. profile picture" /> */}
          <img className='profile-image' src={profile} alt="Lucile L. profile picture" />

        </div>

        <div className="section__text">
          <h1 className="section__text__p1" id="name">Lucile L.</h1>
          <p className="section__text__p2">Web Developer</p>
          <p className="section__text__p3">Marseille, France</p>
          <div className="btn-container">
            <button
              className="profile-btn"
              onClick={() => window.open('./assets/CV_Lucile_Lefebvre.pdf', '_blank')}
            >
              Download CV
            </button>
            <button
              className="profile-btn"
              onClick={() => (window.location.href = './#contact')}
            >
              Contact Info
            </button>
            <img
              src={linkedin}
              alt="My LinkedIn profile"
              className="icon"
              onClick={() => window.open('https://www.linkedin.com/in/lucilelefebvre/', '_blank')}
            />
          </div>
        </div>
      </section>

      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>

        <a href="./1">
        {/* <div className="projects-container"> */}
          <div className="project-details">
            <img src={croissants} alt="Un aperçu de l'application" className="project-img" />
            {/* <img src={arrow} alt="Un aperçu de l'application" className="arrow-img" /> */}
            {/* <a className="prev">&#10094;</a>: */}

            <div className="project-title-div">
              <h2 className="project-title">Vite,des croissants!</h2>
              <p className='project-description'>Vite, des croissants! est une boulangerie locale située au
              cœur d'une grande ville. Elle propose une gamme variée de
              pains artisanaux, de viennoiseries et de pâtisseries fines. Le
              Croissant Enchanté vise à offrir des produits frais et de
              qualité, réalisés avec des ingrédients locaux. Elle cible
              principalement les habitants urbains et les travailleurs
              pressés qui cherchent à déguster des produits frais sans
              perdre de temps.</p>


              <p className="arrow-img">&#10095;</p>
            </div>
          </div>
        {/* </div> */}
        </a>

        <a href="./2">
        {/* <div className="projects-container"> */}
          <div className="project-details">
            <img src={sweat} alt="un aperçu du site" className="project-img" />
            <div className="project-title-div">
              <h2 className="project-title">SweatCraft</h2>
              <p className="pproject-description">
                SweatCraft est un site web spécialisé dans la personnalisation et la commande de sweat-shirts. Il offre une large gamme de modèles, de couleurs, et de techniques de personnalisation, y compris la broderie et l'impression spéciale. 
              </p>
            </div>
          </div>
          <p className="arrow-img">&#10095;</p>
        </a>


        <a href="./3">
        {/* <div className="projects-container"> */}
          <div className="project-details">
            <img src={nutrition} alt="un aperçu de l'appli" className="project-img" />
          
            <div className="project-title-div">
              <h2 className="project-title">NutriVision</h2>
              <p className="project-description">
              NutriVoice est une application de coaching nutritionnel conçue spécifiquement pour les utilisateurs aveugles et malvoyants. Elle utilise des commandes vocales et des retours audio pour fournir des plans de repas personnalisés, suivre l'apport nutritionnel et offrir des conseils éducatifs. Les utilisateurs ciblés sont les individus ayant une déficience visuelle cherchant à maintenir ou améliorer leur santé nutritionnelle grâce à une plateforme accessible et conviviale.
              </p>
            </div>
          </div>
          <p className="arrow-img">&#10095;</p>
        </a>
      </section>

    </div>
  );
};

export default Home;
