// import React from 'react';
// import '../styles/Retreats.css';

import '../styles/Project.css';
import '../styles/Home.css'

import sketch1 from '../assets/nutrition-sketch-1.jpg'
import sketch2 from '../assets/nutrition-sketch-2.jpg'
import wireframe1 from '../assets/nutri-wireframe-1.png'
// import item from '../assets/croissant-wireframe (8).png'
// import cart from '../assets/croissant-wireframe (7).png'
// import delivery from '../assets/croissant-wireframe (6).png'
// import confirmation from '../assets/croissant-wireframe (5).png'
import maquette1 from '../assets/nutrition-maquette-1.png'
import maquette2 from '../assets/nutrition-maquette-2.png'
import Navbar from './Navbar';


const Nutrition = () => {
    return (

      <div className="body">
        <Navbar/>
        <a className="prev" href='./'>&#10094; Retour</a>

        <section id="nutrition">
          {/* <p className="section__text__p1">Browse My Recent</p> */}
          <h1 className="title">NutriVoice</h1>

          {/* <a href="./1"> */}
          {/* <div className="projects-container"> */}
            <div className="show-details">
              {/* <img src={croissants} alt="Un aperçu de l'application" className="show-img" /> */}
                <h2 className="show-title">Rôle </h2>
                  <p className='show-details-content'>Designer UX de la conception à la livraison </p>

                <h2 className="show-title">Responsabilités</h2>
                  <ul className="show-list">
                    <li>Mener des recherches utilisateur</li>
                    <li>Réaliser des wireframes sur papier et en version numérique</li>
                    <li>Créer des prototypes basse et haute fidélité</li>
                    <li>Concevoir l'interface utilisateur</li>
                    <li>Prendre en compte et assurer la conformité à l’accessibilité</li>
                    <li>Itérer sur les designs jjusqu'à obtention d'un prototype satisaisant notre public cible</li>
                  </ul>

                <h2 className="show-title">L’objectif du projet</h2>
                <p className='show-details-content'>
                Concevoir une application de coaching nutritionnel accessible qui permette aux individus malvoyants de gérer leur santé nutritionnelle de manière autonome. En utilisant des commandes vocales et des retours audio, l'application vise à promouvoir la santé et le bien-être parmi les utilisateurs aveugles.                
                </p>  


                <h2 className="show-title">Le public ciblé</h2>
                <p className='show-details-content'>
                J'ai mené des entretiens et créé des cartes d'empathie pour comprendre les utilisateurs pour lesquels nous concevons l'application et leurs besoins. Grâce à la recherche, nous avons identifié 2 groupes d‘utilisateurs principaux:
            <ul className="show-list">
              <li>Les personnes aveugles qui souhaitent suivre et améliorer leur nutrition de manière autonome.</li>
              <li>Les aidants et professionnels de la santé qui assistent les personnes aveugles dans leurs démarches nutritionnelles.</li>
            </ul>
                </p>

                <h2 className="show-title">Difficultés et contraintes</h2>
                <p className='show-details-content'>
                Les utilisateurs ont les difficultés suivantes:
                  <ul className="show-list">
                    <li>la navigation dans l'interface de l'application</li>
                    <li>difficultés à enregistrer avec précision leurs repas et à comprendre les informations nutritionnelles en raison du manque de retours audio dans les solutions existantes</li>
                  </ul>
                De nombreuses applications de coaching nutritionnel ne sont pas accessibles aux utilisateurs malvoyants, créant une barrière significative pour obtenir des conseils nutritionnels personnalisés et suivre les habitudes alimentaires. NutriVision vise à combler cette lacune en fournissant une solution entièrement accessible qui répond aux besoins uniques des utilisateurs aveugles.
                </p>

                <h2 className="show-title">Etude de recherche: Optimisation de l'expérience utilisateur pour une application de coaching nutrition pour des personnes aveugles</h2>
                <p className='show-details-content'>
                  <h3 className="show-subtitle">Objectifs</h3>
                  <ul className="show-list">
                  <li>Identifier les principaux points de friction dans le parcours utilisateur.</li>
                  <li>Comprendre les attentes et les besoins des utilisateurs aveugles lors de l'utilisation d'une application de coaching nutritionnel.</li>
                  <li>Améliorer la navigation et la facilité d'utilisation de l'application.</li>
                  <li>Assurer que l'application répond aux besoins des utilisateurs ayant des capacités diverses.</li>
                  </ul>
                  <h3 className="show-subtitle">Méthodes</h3>
                  <ul className="show-list">
                    <li>Tests utilisateurs: Observation des utilisateurs aveugles naviguant et utilisant l'application avec des assistants vocaux et des lecteurs d'écran.</li>
                    <li>Interviews: Entretiens approfondis avec les utilisateurs pour comprendre leurs expériences, défis et attentes spécifiques.</li>
                    <li>Groupes de discussion: Réunir des utilisateurs aveugles pour discuter de leurs expériences et proposer des améliorations.</li>
                  </ul>
                  <h3 className="show-subtitle">Analyse des données</h3>
                  <ul className="show-list">
                  <li>Analyse qualitative: Codage des réponses des interviews et des observations pour identifier les thèmes récurrents et les points de douleur.</li>
              <li>Analyse quantitative: Utilisation de statistiques descriptives pour analyser les réponses des enquêtes et les métriques de performance.</li>
            </ul>
                  <h3 className="show-subtitle">Participants</h3>
                  <ul className="show-list">
                  <li>Nombre de participants: 5-7 utilisateurs aveugles</li>
              <li>Caractéristiques des participants:
                <ul className="show-list">
                  <li>Utilisateurs réguliers de technologies d'assistance (lecteurs d'écran, assistants vocaux)</li>
                  <li>Nouveaux utilisateurs de l'application de coaching nutritionnel</li>
                  <li>Diversité en termes d'âge, sexe, et expériences de vie</li>
                  <li>Inclure des utilisateurs ayant des besoins spécifiques (ex: malvoyants, personnes avec d'autres handicaps)</li>
                </ul>
              </li>
                  </ul>
                </p>

                <h2 className="show-title">Le concept de design initial</h2>
                <div className="wireframes-container">
                  <p>Pour aider nos utilisateurs à naviguer dans l’application, nous mettons en place:
- des descriptions vocales claires et concises des éléments de navigation
- des retours audios pour chaque section de texte
- gros boutons pour activer le micro
- utilisation de couleurs distinctes et contrastes importants (dans une second temps, dans les maquettes)
</p>
                  <img src={sketch2} alt="Un aperçu de l'application" className="wireframe-img" />
                  <img src={sketch1} alt="Un aperçu de l'application" className="wireframe-img" />
                </div>

                <h2 className="show-title">Wireframes</h2>
                            
                <div className="wireframes-container">
                  <img src={wireframe1} alt="Un aperçu de l'application" className="storyboard-img"/>

                </div>
                <a target='_blank' href="https://www.figma.com/proto/dpMPSqHUPPCMwH5qAVuISr/Untitled?node-id=1-3&t=SsEiLzjJbBl2fIAK-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3">Lien vers le prototype basse fidelité</a>
                            
                <h2 className="show-title">Résultats des tests utilisateur</h2>
                <p className='show-details-content'>
                Les recommandations extraites de notre étude nous ont donné des lignes directrices à suivre pour améliorer nos prochains prototypes.
                </p>
                <ul className="show-list">
                  <li>La plupart des participants ont pu accomplir les tâches sans difficulté majeure, ce qui souligne l'efficacité de l'interface vocale pour les utilisateurs malvoyants. Cependant, certains participants ont suggéré des améliorations dans les instructions initiales pour rendre le processus encore plus fluide.</li>
                  <li>Les descriptions audio et les retours vocaux fournis par l'application ont été largement appréciés, mais les participants ont noté que certaines descriptions pouvaient être raccourcies ou simplifiées pour éviter une surcharge d'informations.</li>
                  <li>Un point de friction récurrent a été l'enregistrement des repas par commande vocale. Certains participants ont éprouvé des difficultés à enregistrer les repas avec précision, comme les quantités ou les ingrédients complexes. </li>
                </ul>
                
                <h2 className="show-title">Designs finaux et peaufinés</h2>


                <div className="wireframes-container">
                  <img src={maquette1} alt="Un aperçu de l'application" className="storyboard-img" />
                </div>
                <div className="wireframes-container">
                  <img src={maquette2} alt="Un aperçu de l'application" className="storyboard-img" />
                </div>
                <a target='_blank' href="https://www.figma.com/proto/dpMPSqHUPPCMwH5qAVuISr/Untitled?node-id=3-225&t=SsEiLzjJbBl2fIAK-0&scaling=scale-down&page-id=3%3A224&starting-point-node-id=3%3A225">Prototype haute-fidelité</a>

                <h2 className="show-title">Conclusion</h2>
                Les conceptions de cette application de coaching nutritionnel ont un impact profond sur ses utilisateurs, offrant accessibilité et autonomisation aux personnes malvoyantes cherchant à gérer leur santé nutritionnelle. 
                <h3 className="show-subtitle">Enseignements tirés</h3>
                <p className='show-details-content'>
                J'ai appris l'importance du design inclusif et l'impact significatif qu'il peut avoir sur la vie des utilisateurs. En priorisant les fonctionnalités d'accessibilité telles que les commandes vocales et les retours audio, j'ai acquis une compréhension plus profonde de la manière dont la technologie peut briser les barrières et permettre aux personnes handicapées de mener des modes de vie plus sains. De plus, j'ai développé des compétences dans la réalisation de recherches utilisateurs auprès de populations diverses et dans l'intégration des retours pour créer des conceptions plus centrées sur l'utilisateur.
                </p>

                <h3 className="show-subtitle">Prochaines étapes</h3>
                <p className='show-details-content'>
                <ul className="show-list">
                  <li>Concevoir des designs pour les autres supports (tablette et ordinateur).</li>
                  <li>Obtenir les retours des utilisateurs sur notre nouveau prototype</li>
                  <li>Faire le design hand-off avec les développeurs frontend.</li>
                </ul>
                </p>
              
            </div>
        </section>

      </div>
    )
}

export default Nutrition;
