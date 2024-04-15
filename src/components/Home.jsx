import "../sass/home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="homeContainer">
      <div id="homeTitle">
        <h2>Concepteur et Développeur d'Application Javascript et React</h2>
          <h3>En recherche d'une alternance bachelor ou C.D.A</h3>
      </div>

      <div id="homeTextPresentation">
        <article>
          <h4>Bienvenue sur mon univers numérique !</h4>

          <p>
            Salut, je suis Gaëtan Dammaretz, un développeur frontend passionné,
            ancien Responsable de la sécurité incendie et conseiller clientèle
            bancaire. J'ai choisi de suivre ma passion pour le code et la
            créativité, plongeant ainsi dans le monde fascinant du développement
            web.
          </p>
          <p>
            Passionné par l'univers du web, ma curiosité et ma soif insatiable
            de connaissance me poussent à en apprendre davantage.
          </p>
          <p>
            J'ai acquis une solide expertise en HTML, CSS et JavaScript, et j'ai
            exploré les horizons de React et Node.js pour donner vie à mes
            idées.
          </p>
          <p>
            Explorez mon portfolio pour découvrir des projets qui
            témoignent de mon engagement envers des expériences web
            exceptionnelles. Je suis ravi de partager avec vous mes
            réalisations.
          </p>
          <p>
            Je suis actuellement à la recherche de ma première expérience
            professionnelle dans le domaine du développement web ou d'un contrat
            de professionnalisation. Passionné par le code et déterminé à faire
            mes preuves dans le monde professionnel, je suis prêt à relever de
            nouveaux défis et à contribuer activement à des projets innovants.
            Si vous êtes à la recherche d'un développeur frontend motivé et
            créatif, n'hésitez pas à me contacter. Je suis impatient de
            découvrir de nouvelles opportunités et de contribuer au succès de
            votre équipe.
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
