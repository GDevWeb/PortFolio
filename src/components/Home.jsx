import "../sass/home.scss";
import myAvatar from "/images/avatar2.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="homeContainer">
      <div id="homeTitle">
        <h2>Concepteur et Développeur d'Application Javascript et React</h2>
      </div>

      <figure id="avatar">
        <img src={myAvatar} alt={"avatar de Dammaretz Gaëtan via I.A"} />
      </figure>

      <div id="homeTextPresentation">
        <article>
          <h3>Bienvenue sur mon univers numérique !</h3>
          <p>
            Salut, je suis Gaëtan Dammaretz, un développeur frontend passionné,
            ancien Responsable de la sécurité incendie et conseiller clientèle
            bancaire. J'ai choisi de suivre ma passion pour le code et la
            créativité, plongeant ainsi dans le monde fascinant du développement
            web.
          </p>
          <p>
            Mon terrain de jeu ? L'intersection entre la beauté du design et la
            puissance du code. J'ai acquis une solide expertise en HTML, CSS, et
            JavaScript, et j'ai exploré les horizons de React et Node.js pour
            donner vie à mes idées.
          </p>
          <p>
            Explorez mon portfolio pour découvrir des projets captivants qui
            témoignent de mon engagement envers des expériences web
            exceptionnelles. Chaque ligne de code que j'écris raconte une
            histoire unique, et je suis ravi de la partager avec vous.
          </p>
          <p>
            <Link to="/about">
              Découvrez-en plus sur mon parcours et mes passions
            </Link>{" "}
            ou parcourez mes projets pour voir comment je marie la créativité à
            la technologie. Prêt à plonger dans l'univers où le code rencontre
            l'innovation ? Bienvenue dans mon monde numérique !
          </p>
        </article>
      </div>
    </div>
  );
}

export default Home;
