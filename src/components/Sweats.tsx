// import React from 'react';
// import '../styles/Retreats.css';
import '../styles/Project.css';
import '../styles/Home.css'
import Navbar from './Navbar'
import sketch from '../assets/sweatcraft-sketch.jpg'
import sitemap from '../assets/sitemap.png'
import wireframe1 from '../assets/sweat-wireframe.png'
import wireframe2 from '../assets/sweat-wireframe-2.png'
import wireframe3 from '../assets/sweat-wireframe-3.png'
import wireframe4 from '../assets/sweat-wireframe-4.png'
import wireframe5 from '../assets/sweat-wireframe-5.png'
import maquette3 from '../assets/sweats-maquette (3).png'
import maquette4 from '../assets/sweats-maquette (4).png'

const Sweats = () => {
    return (

      <div className="body">
        <Navbar/>
        <a className="prev" href='./'>&#10094; Retour</a>


        <section id="sweats">
          <h1 className="title">NutriVoice</h1>
            <div className="show-details">
                <h2 className="show-title">Rôle </h2>
                  <p className='show-details-content'>Designer UX de la conception à la livraison </p>

                <h2 className="show-title">Responsabilités</h2>
                  <ul className="show-list">
                    <li>Conduire des interviews</li>
                    <li>Créer une sitemap</li>
                    <li>Réaliser des wireframes sur papier et en version numérique</li>
                    <li>Créer des prototypes basse et haute fidélité</li>
                    <li>Mener des études d’utilisabilité</li>
                    <li>Itérer sur les designs</li>
                    <li>Proposer des designs responsives qui s'adaptent aux ordinateurs, téléphones, et tablettes</li>
                  </ul>

                <h2 className="show-title">L’objectif du projet</h2>
                <p className='show-details-content'>
                  Concevoir un site web pour SweatCraft permettant aux utilisateurs de personnaliser et commander facilement des sweat-shirts, tout en garantissant une expérience utilisateur fluide et agréable.
                </p>  


                <h2 className="show-title">Le public ciblé</h2>
                <p className='show-details-content'>
                  J'ai mené des entretiens et créé des cartes d'empathie pour comprendre les utilisateurs pour lesquels nous concevons le site web et leurs besoins. Grâce à la recherche, nous avons identifié deux groupes d‘utilisateurs principaux :
                </p>  
                <ul className="show-list">
                    <li> des jeunes professionnels qui cherchent des vêtements uniques</li>
                    <li>des amateurs de mode qui aiment personnaliser leurs habits.</li>
                  </ul>
                  <p className='show-details-content'>
                  Nos recherches ont confirmé les hypothèses initiales concernant nos utilisateurs et ont mis en lumière l’importance de garantir un processus de personnalisation facile et intuitif. Il est également ressorti une volonté de transparence sur les techniques de personnalisation disponibles.                
                  </p>

                <h2 className="show-title">Difficultés et contraintes</h2>
                <p className='show-details-content'>
                  Les utilisateurs souhaitent commander des sweat-shirts personnalisés sans passer par des processus complexes et longs. Les sites existants manquent souvent d'options de personnalisation détaillées et d'une interface utilisateur intuitive.
                </p>

                <h2 className="show-title">Etude de recherche: Optimisation de l'expérience utilisateur pour une de personnalisation et commande de sweat shirts</h2>
                  <h3 className="show-subtitle">Objectifs</h3>
                  <ul className="show-list">
                    <li>Identifier les principaux points de friction dans le parcours utilisateur.</li>
                    <li>Comprendre les attentes et les besoins des utilisateurs lors de la personnalisation de leurs vêtements via notre site.</li>
                    <li>Proposer un flux d'achat simple et rassurant.</li>
                    <li>Améliorer la navigation et la facilité d'utilisation du site.</li>
                    <li>Augmenter les taux de conversion en rendant le processus de commande plus intuitif.</li>
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
                    <li>Nombre de participants: 5-7 utilisateurs</li>
                    <li>Caractéristiques des participants:
                      <ul className="show-list">
                        <li>Utilisateurs réguliers de l'application</li>
                        <li>Nouveaux utilisateurs</li>
                        <li>Diversité en termes d'âge, sexe, et capacités</li>
                      </ul>
                    </li>
                  </ul>
                

                <h2 className="show-title">Le concept de design initial</h2>
                <div className="wireframes-container">
                  <img src={sketch} alt="Un aperçu de l'application" className="wireframe-img" />
                </div>                
                <h2 className="show-title">Sitemap</h2>
                <img src={sitemap} alt="Un aperçu de l'application" className="storyboard-img" />

                <h2 className="show-title">Wireframes</h2>
                <div className="wireframes-container">
                  <img src={wireframe1} alt="Un aperçu de l'application" className="wireframe-img" />
                  <img src={wireframe2} alt="Un aperçu de l'application" className="wireframe-img" />
                  <img src={wireframe3} alt="Un aperçu de l'application" className="wireframe-img" />
                  <img src={wireframe4} alt="Un aperçu de l'application" className="wireframe-img" />
                  <img src={wireframe5} alt="Un aperçu de l'application" className="wireframe-img" />
                </div>
                <a target='_blank' href="https://www.figma.com/proto/WqHfKEdo2ex30SA8gqSCmF/Untitled?node-id=6-5&t=wVYnl4fwiXC6VGhG-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=6%3A5">Lien vers le prototype basse fidelité</a>
                            
                <h2 className="show-title">Résultats des tests utilisateur</h2>
                <ul className="show-list">
                  <li>Les utilisateurs trouvent les processus de personnalisation existants trop complexes et longs.</li>
                  <li>Les options de personnalisation sont souvent limitées sur les sites existants.</li>
                  <li>La transparence concernant les techniques de personnalisation et les matériaux utilisés fait souvent défaut.</li>
                </ul>
                
                <h2 className="show-title">Designs finaux et peaufinés</h2>
                <ul className="show-list">
                  <li>Notre nouvelle maquette n’aura donc qu’un point d’entrée dans le flow de personnalisation et commande du produit.</li>
                  <li>Nous ajoutons un choix de couleur personnalisé, qui ouvrira une palette de couleurs.</li>
                  <li>Nous ajoutons un menu déroulant, d’où l’utilisateur pourra accéder à leurs préférences de paiement et livraison pour faciliter les futures commandes</li>
                </ul>
                  {/* <img src={maquette1} alt="Un aperçu de l'application" className="storyboard-img" />
                  <img src={maquette2} alt="Un aperçu de l'application" className="storyboard-img" /> */}
                
                <div className="wireframes-container">
                  <img src={maquette3} alt="Un aperçu de l'application" className="storyboard-img" />
                </div>
                <p>Nous créons des maquettes de designs adaptés aux mobiles:</p>
                <div className="wireframes-container">
                  <img src={maquette4} alt="Un aperçu de l'application" className="storyboard-img" />
                </div>

                <a target='_blank' href="https://www.figma.com/proto/WqHfKEdo2ex30SA8gqSCmF/Untitled?node-id=16-886&t=wVYnl4fwiXC6VGhG-0&scaling=min-zoom&page-id=16%3A885&starting-point-node-id=16%3A886">Prototype haute-fidelité</a>
                  
                <h2 className="show-title">Conclusion</h2>
                Les retours des utilisateurs ont été pris en compte pour le design finale de l’application, il en résulte des designs accessibles à tous sur différents types d'appareil
                <p className="quote">
                "L'interface de SweatShop est incroyablement
                intuitive. J'ai pu créer un sweat-shirt personnalisé en
                quelques minutes et le résultat était exactement ce
                que je voulais. C'est parfait pour moi qui ai un emploi
                du temps chargé !"
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

export default Sweats;
