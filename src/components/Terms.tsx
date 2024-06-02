// import React from 'react';
import '../styles/Terms.css';
import Footer from './Footer';
// import profile from '../assets/profile.png';
import Navbar from './Navbar'

function Terms() {

  return (
    <div className='terms-body'>

      <div className='navbar-container'>
        <Navbar/>
      </div>
                {/* <div className='terms-content'> */}
      <div className='terms-container'>
      <h1 className='cgu-title'>Conditions Générales d'Utilisation</h1>
<p>
Bienvenue sur notre site de cours de yoga. Veuillez lire attentivement les présentes conditions générales d'utilisation avant d'accéder à nos services.
</p>

<h2>
1. Acceptation des Conditions
</h2>
<p>
En accédant à notre site et en utilisant nos services, vous acceptez d'être lié par les présentes conditions générales d'utilisation. Si vous n'acceptez pas toutes les conditions énoncées ici, vous ne pouvez pas accéder au site ni utiliser nos services.
</p>
<h2>
2. Utilisation du Site
</h2>
<p>
Vous devez être âgé d'au moins 18 ans pour utiliser ce site. En utilisant ce site, vous déclarez et garantissez que vous avez au moins 18 ans.
</p>
<h2>
3. Compte Utilisateur
</h2>
<p>
Pour accéder à certains services offerts par notre site, vous devrez peut-être créer un compte utilisateur. Vous êtes responsable de maintenir la confidentialité de votre compte et de votre mot de passe et de limiter l'accès à votre ordinateur. Vous acceptez la responsabilité de toutes les activités qui se produisent sous votre compte.
</p>
<h2>
4. Contenu du Site
</h2>
<p>
Le contenu de ce site est fourni à des fins d'information générale uniquement. Nous nous réservons le droit de modifier ou de retirer le contenu à tout moment sans préavis.
</p>
<h2>
5. Propriété Intellectuelle
</h2>
<p>
Le contenu de ce site, y compris les textes, images, logos et autres éléments, est protégé par des droits d'auteur et autres droits de propriété intellectuelle. Vous ne pouvez pas reproduire, distribuer ou exploiter de quelque manière que ce soit le contenu de ce site sans notre autorisation écrite préalable.
</p>
<h2>
6. Responsabilité
</h2>
<p>
Nous nous efforçons de maintenir les informations sur ce site à jour et exactes, mais nous ne garantissons pas l'exactitude, l'exhaustivité ou la pertinence du contenu. Nous déclinons toute responsabilité pour toute perte ou dommage découlant de l'utilisation de ce site.
</p>
<h2>
7. Modifications des Conditions
</h2>
<p>
Nous nous réservons le droit de modifier ces conditions générales d'utilisation à tout moment. Les modifications prendront effet dès leur publication sur le site. En continuant à utiliser le site après la publication des modifications, vous acceptez les conditions mises à jour.
</p>
<h2>
8. Droit Applicable
</h2>
<p>
Les présentes conditions générales d'utilisation sont régies par les lois en vigueur dans [insérer le pays ou la région]. Tout litige découlant de ces conditions générales d'utilisation sera soumis à la juridiction exclusive des tribunaux compétents de [insérer la juridiction].
En utilisant ce site, vous acceptez nos conditions générales d'utilisation. Si vous avez des questions ou des préoccupations, veuillez nous contacter à [insérer une adresse e-mail de contact].
</p>

<p>
Date d'entrée en vigueur : [insérer la date]
</p>

      </div>

      {/* <div className='terms-footer'> */}

        <Footer/>
      {/* </div> */}
              {/* </div> */}

    </div>
  )
}

export default Terms
