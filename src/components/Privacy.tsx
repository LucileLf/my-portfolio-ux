import '../styles/Privacy.css';
import Footer from './Footer';
import Navbar from './Navbar';

function Privacy() {
  return (
    <div className='privacy-body'>
      <div className='navbar-container'>
        <Navbar />
      </div>

      <div className='privacy-container'>
        <h1 className='privacy-title'>POLITIQUE DE CONFIDENTIALITÉ</h1>

        <p>Nous nous engageons à protéger les Données Personnelles des Utilisateurs de nos Services disponibles via notre Site Web. Cette Politique de Confidentialité décrit comment le yoga de Lila et Lila Yoga, LLC (le « Site », « nous » ou « notre ») collectent, utilisent et divulguent vos Informations Personnelles lorsque vous visitez ou effectuez un achat sur le Site.</p>

        <h2>COLLECTE DES INFORMATIONS PERSONNELLES</h2>
        <p>Lorsque vous visitez le Site, nous collectons des informations sur votre appareil et votre interaction avec le Site. Nous collectons également les informations nécessaires pour traiter vos achats et vous fournir un support client. Les Informations Personnelles incluent des détails comme votre nom, adresse, informations de paiement et adresse email.</p>

        <h2>OBJECTIF DE LA COLLECTE</h2>
        <p>
          - Charger le Site correctement.<br />
          - Effectuer des analyses pour optimiser notre Site.<br />
          - Traiter les paiements, organiser la livraison et communiquer avec vous.<br />
          - Fournir un support client.
        </p>

        <h2>PARTAGE DES INFORMATIONS PERSONNELLES</h2>
        <p>Nous partageons vos Informations Personnelles avec des prestataires de services pour nous aider à fournir nos services. Nous utilisons notamment Squarespace et Gelato pour notre boutique en ligne.</p>

        <h2>PUBLICITÉ COMPORTEMENTALE</h2>
        <p>Nous utilisons vos Informations Personnelles pour vous fournir des publicités ciblées. Vous pouvez en savoir plus sur ces pratiques et vous désinscrire de certaines publicités via les liens suivants :</p>
        <p>
          - <a href="https://www.facebook.com/settings/?tab=ads">Facebook</a><br />
          - <a href="https://www.google.com/settings/ads/anonymous">Google</a><br />
          - <a href="http://optout.aboutads.info/">Digital Advertising Alliance</a>
        </p>

        <h2>VOS DROITS</h2>
        <p>Si vous êtes résident de l'EEE, vous avez le droit d'accéder, de corriger, de mettre à jour ou de supprimer vos Informations Personnelles. Si vous souhaitez exercer ces droits, veuillez nous contacter à <a href="mailto:stacy@timsenesi.com">stacy@timsenesi.com</a>.</p>

        <h2>COOKIES</h2>
        <p>Nous utilisons des cookies pour améliorer votre expérience de navigation. Vous pouvez contrôler et gérer les cookies via les paramètres de votre navigateur. Pour plus d'informations, visitez <a href="http://www.allaboutcookies.org">www.allaboutcookies.org</a>.</p>

        <h2>CHANGEMENTS</h2>
        <p>Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre pour refléter les changements dans nos pratiques ou pour des raisons opérationnelles, légales ou réglementaires.</p>

        <h2>CONTACT</h2>
        <p>Pour toute question, veuillez nous contacter à <a href="mailto:stacy@yogalila.com">stacy@yogalila.com</a></p>
      </div>

      <Footer />
    </div>
  );
}

export default Privacy;
