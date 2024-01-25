import "../sass/aboutMe.scss";
import myAvatar from "/images/avatar.jpg";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div id="aboutMeContainer">
      <div id="aboutMeTitle">
        <h2>À propos</h2>
      </div>

      <figure id="avatar">
        <img src={myAvatar} alt={"Ma photo via Leonardo A.I"} />
      </figure>

      <div id="aboutMeText">
        <article>
          <h3>Bienvenue sur ma page personnelle !</h3>
          <p>
            Salut, je suis Gaëtan Dammaretz, un développeur web basé en région
            Lilloise. Mon parcours atypique m'a guidé du monde de la sécurité
            incendie et de la banque à celui du développement.
          </p>
          <p>
            Ma passion pour le code et la créativité m'a conduit à explorer
            divers horizons, de la conception web à l'implémentation avec des
            technologies telles que HTML, CSS, JavaScript, React, et Node.js.
          </p>
          <p>
            En dehors du code, je suis un mélomane-guitariste, un adepte du
            street workout et un passionné des dernières technologies. Mon
            approche du développement va au-delà de l'écriture de lignes de code
            ; elle consiste à fusionner la beauté du design avec la puissance du
            code.
          </p>
          <p>
            Explorez mon parcours professionnel, découvrez mes compétences, mes
            projets et ma vision du développement web. Chaque projet que je
            réalise est une nouvelle histoire, et je suis enthousiaste à l'idée
            de partager ces expériences avec vous.
          </p>
          <p>
            <Link to="/contact">Prêt à collaborer ? Contactez-moi ici</Link> et
            découvrez comment nous pouvons créer ensemble des expériences web
            mémorables. Bienvenue dans mon univers numérique, où chaque ligne de
            code est une expression de ma passion.
          </p>
        </article>
      </div>
    </div>
  );
}

export default AboutMe;
