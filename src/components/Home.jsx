import "../sass/home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="homeContainer">
      <div id="homeTitle">
        <h2>Développeur Web passionné</h2>
      </div>

      <div id="homeTextPresentation">
        <article>
          <h3>Bienvenue sur mon univers numérique !</h3>

          <p>
            Je suis Gaëtan Dammaretz, un développeur frontend passionné. Ancien
            Responsable de la sécurité incendie et conseiller clientèle
            bancaire, j'ai choisi de suivre ma passion pour le code et la
            créativité, plongeant ainsi dans le monde fascinant du développement
            web.
          </p>
          <p>
            Passionné par l'univers du web, ma curiosité et ma soif insatiable
            de connaissance me poussent à en apprendre davantage chaque jour.
          </p>
          <p>
            J'ai acquis une solide expertise en HTML, CSS et JavaScript, et j'ai
            exploré les horizons de React et Node.js pour donner vie à mes
            idées.
          </p>
          <p>
            Explorez mon portfolio pour découvrir des projets qui témoignent de
            mon engagement envers des expériences web exceptionnelles. Je suis
            ravi de partager avec vous mes réalisations.
          </p>
          <p>
            <Link to="/about">Prêt à en savoir plus ?</Link> Découvrez mon
            parcours et mes passions, ou parcourez mes projets pour voir comment
            je marie la créativité à la technologie. Bienvenue dans mon monde
            numérique !
          </p>
        </article>
      </div>
    </div>
  );
}

export default Home;
