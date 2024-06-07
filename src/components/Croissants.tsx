// import React from 'react';
import '../styles/Project.css';
import '../styles/Home.css'

import storyboard from '../assets/croissants-storyboard.jpg'
import menu from '../assets/croissant-wireframe (1).png'
import item from '../assets/croissant-wireframe (8).png'
import cart from '../assets/croissant-wireframe (7).png'
import delivery from '../assets/croissant-wireframe (6).png'
import confirmation from '../assets/croissant-wireframe (5).png'
import maquette1 from '../assets/coissants-maquette (1).png'
import maquette2 from '../assets/coissants-maquette (3).png'
import maquette3 from '../assets/coissants-maquette (4).png'
import maquette4 from '../assets/coissants-maquette (5).png'
import maquette5 from '../assets/coissants-maquette (2).png'
import Navbar from './Navbar';


const Croissants = () => {
    return (

      <div className="body">
        <Navbar/>
            <a className="prev" href='./'>&#10094; Retour</a>


        <section id="croissants">
          <h1 className="title">Vite, des croissants!</h1>

            <div className="show-details">
                <h2 className="show-title">Rôle </h2>
                  <p className='show-details-content'>Designer UX de la conception à la livraison </p>

                <h2 className="show-title">Responsabilités</h2>
                  <ul className="show-list">
                    <li>Conduire des interviews</li>
                    <li>Réaliser des wireframes sur papier et en version numérique</li>
                    <li>Créer des prototypes basse et haute fidélité</li>
                    <li>Mener des études d’utilisabilité</li>
                    <li>Prendre en compte l’accessibilité</li>
                    <li>Itérer sur les designs</li>
                  </ul>

                <h2 className="show-title">L’objectif du projet</h2>
                <p className='show-details-content'>
                  Concevoir une application pour Vite, des croissants! permettant aux utilisateurs de commander facilement et de se faire livrer des produits frais de la boulangerie.       
                </p>  


                <h2 className="show-title">Le public ciblé</h2>
                <p className='show-details-content'>
                  J'ai mené des entretiens et créé des cartes d'empathie pour comprendre les utilisateurs pour lesquels nous concevons l'application et leurs besoins. Grâce à la recherche, nous avons identifié 2 groupes d‘utilisateurs principaux: 
                </p>
                  <ul className="show-list">
                    <li>les parents qui souhaitent faire profiter des produits de boulangerie à leurs enfants mais ne peuvent pas se rendre en magasin</li>
                    <li>les jeunes actifs pressés qui cherchent à gagner du temps au moment des repas.</li>
                  </ul>
                  Nos recherches ont confirmé les hypothèses initiales concernant nos utilisateurs, et ont mis en lumière l’importance de garantir un processus de commande facile et rapide. Il est également ressorti une volonté de transparence quant aux ingrédients présents dans les produits.

                <h2 className="show-title">Difficultés et contraintes</h2>
                <p className='show-details-content'>
                  Les citadins et les travailleurs n'ont pas
                  toujours le temps de se rendre en boulangerie
                  pour acheter leurs produits préférés. Nous visons à faciliter l'achat de produits de
                  boulangerie pour les clients. Cependant, nous avons reçu des retours
                  indiquant que certains utilisateurs trouvent l'application difficile à naviguer
                  et à utiliser efficacement. De plus, nous souhaitons améliorer l'expérience
                  utilisateur pour augmenter la satisfaction client et les taux de conversion.
                </p>

                <h2 className="show-title">Etude de recherche: Optimisation de l'expérience utilisateur pour une application de commande en boulangerie</h2>
                  <h3 className="show-subtitle">Objectifs</h3>
                  <ul className="show-list">
                    <li>Identifier les principaux points de friction dans le parcours utilisateur.</li>
                    <li>Comprendre les attentes et les besoins des utilisateurs lors de la commande de produits de boulangerie via une application mobile.</li>
                    <li>Améliorer la navigation et la facilité d'utilisation de l'application.</li>
                    <li>Augmenter les taux de conversion en rendant le processus de commande plus intuitif.</li>
                    <li>Assurer que l'application répond aux besoins des utilisateurs ayant des capacités diverses.</li>
                  </ul>
                  <h3 className="show-subtitle">Méthodes</h3>
                  <ul className="show-list">
                    <li>Tests utilisateurs: Observation des utilisateurs en train de naviguer et de passer des commandes sur l'application.</li>
                    <li>Interviews: Entretiens approfondis avec les utilisateurs pour comprendre leurs expériences et défis.</li>
                    <li>Enquêtes: Distribution de questionnaires pour recueillir des données quantitatives sur l'expérience utilisateur.</li>
                  </ul>
                  <h3 className="show-subtitle">Analyse des données</h3>
                  <ul className="show-list">
                    <li>Analyse qualitative: Codage des réponses des interviews et des observations pour identifier les thèmes récurrents.</li>
                    <li>Analyse quantitative: Utilisation de statistiques descriptives pour analyser les réponses des enquêtes et les métriques de performance.</li>
                  </ul>
                  <h3 className="show-subtitle">Méthodes</h3>
                  <ul className="show-list">
                    <li>Nombre de participants: 15-20 utilisateurs</li>
                    <li>Caractéristiques des participants:
                      <ul className="show-list">
                        <li>Utilisateurs réguliers de l'application</li>
                        <li>Nouveaux utilisateurs</li>
                        <li>Diversité en termes d'âge, sexe, et capacités</li>
                        <li>Inclure des utilisateurs ayant des besoins spécifiques (ex: malvoyants)</li>
                      </ul>
                    </li>
                  </ul>

                <h2 className="show-title">Le concept de design initial: storyboard close-up</h2>
                  <img src={storyboard} alt="Un aperçu de l'application" className="storyboard-img" />

                <h2 className="show-title">Wireframes</h2>
                            
                <div className="wireframes-container">
                  <img src={menu} alt="Un aperçu de l'application" className="wireframe-img" />
                  <img src={item} alt="Un aperçu de l'application" className="wireframe-img" />
                  <img src={cart} alt="Un aperçu de l'application" className="wireframe-img" />
                  <img src={delivery} alt="Un aperçu de l'application" className="wireframe-img" />
                  <img src={confirmation} alt="Un aperçu de l'application" className="wireframe-img" />
                </div>
                <a target='_blank' href="https://www.figma.com/design/eti4DWDsLRqLxXywFsVysF/Untitled?node-id=0-1&t=CcmkvkQ8E3GAPUaF-1">Lien vers le prototype basse fidelité</a>
                            
                <h2 className="show-title">Résultats des tests utilisateur</h2>
                <p className='show-details-content'>
                Les recommandations extraites de notre étude nous ont donné des lignes directrices à suivre pour améliorer nos prochains prototypes.
                </p>
                <ul className="show-list">
                  <li>Les utilisateurs souhaitent une meilleure organisation et clarté des informations sur
                  les produits</li>
                  <li>Les utilisateurs souhaitent pouvoir personnaliser leurs produits</li>
                  <li>Les utilisateurs souhaitent pouvoir enregistrer leur adresse et moyen de paiement pour faciliter leurs futures commandes</li>
                </ul>

                
                <h2 className="show-title">Designs finaux et peaufinés</h2>
                <ul className="show-list">
                  <li>création de catégories pour cataloguer les produits</li>
                  <li>options de personnalisation pour les produits</li>
                  <li>ajout d'une section 'espace personnel' pour enregistrer des adresses de livraison et des moyens de paiement</li>
                </ul>
                <a target='_blank' href="https://www.figma.com/design/eti4DWDsLRqLxXywFsVysF/Untitled?node-id=19-207&t=CcmkvkQ8E3GAPUaF-1">Prototype haute-fidelité</a>
                <div className="wireframes-container">
  
                  <img src={maquette1} alt="Un aperçu de l'application" className="wireframe-img" />
                  <img src={maquette2} alt="Un aperçu de l'application" className="wireframe-img" />
                  <img src={maquette3} alt="Un aperçu de l'application" className="wireframe-img" />
                  <img src={maquette4} alt="Un aperçu de l'application" className="wireframe-img" />
                  <img src={maquette5} alt="Un aperçu de l'application" className="wireframe-img" />
                </div>
                <h2 className="show-title">Conclusion</h2>
                Les retours des utilisateurs ont été pris en compte pour le design finale de l’application.
                <p className="quote">
                "L'application ‘Vite, des croissants !’ est un véritable sauveur pour moi en tant que père de famille occupé ! Grâce à elle, je peux facilement prévoir et commander des produits de boulangerie frais pour ma famille, même lors des journées chargées.”
                </p>
                <h3 className="show-subtitle">Enseignements tirés</h3>
                <p className='show-details-content'>
                  Cette expérience m’a appris l’importance d’itérer sur nos designs, et d’obtenir un retour de nos utilisateur tôt dans le processus de design, pour éviter de perdre du temps à aller dans la mauvaise direction, ou d’avoir à effectuer des changement sur un produit bien finalisé, ce qui serait plus compliqué.
                </p>

                <h3 className="show-subtitle">Prochaines étapes</h3>
                <ul className="show-list">
                  <li>Effectuer une autre série d'études d’utilisabilité pour valider si les problèmes rencontrés par les utilisateurs ont été efficacement résolus.</li>
                  <li>Réaliser davantage de recherches utilisateur afin de déterminer de nouveaux besoins éventuels.</li>
                  <li>Implémenter les recommandations issues des nouvelles études et recherches pour améliorer continuellement l'expérience de l'application.</li>
                </ul>
              
            </div>
        </section>

      </div>
    )
}

export default Croissants;
