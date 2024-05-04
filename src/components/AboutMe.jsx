import { Link } from "react-router-dom";
import "../sass/aboutMe.scss";
import myAvatar from "/public/images/avatar2.webp";
import indexIcons from "../assets/icons/indexIcons";

function About() {
  return (
    <div id="mainContainer" className="aboutContainer">
      <section className="intro-section">
        <figure className="avatar-container">
          <img src={myAvatar} alt="Ma photo" />
        </figure>
        <div className="intro-text">
          <h2>Faisons connaissance !</h2>
          <p>Bienvenue sur ma page personnelle !</p>{" "}
          <p>
            Salut, je suis Gaëtan Dammaretz, un développeur web basé en région
            Lilloise.
          </p>
          <p>
            Mon parcours atypique m'a guidé du monde de la sécurité incendie et
            de la banque à celui du développement.
          </p>
          <p>
            Passionné par le code et la créativité, j'ai exploré divers
            horizons, de la conception web à l'implémentation avec des
            technologies telles que HTML, CSS, JavaScript, React, et Node.js.
          </p>
        </div>
      </section>

      <section className="skills-section">
        <div className="skill-box">
          <img src={indexIcons.iconCode} alt="icône balise code" />
          <h3>Compétences en développement</h3>
          <p>
            Mon parcours comprend une série de projets personnels et informels
            où j'ai pu mettre en pratique mes connaissances en développement
            JavaScript et React.
          </p>
        </div>
        <div className="skill-box">
          <img src={indexIcons.iconGuitar} alt="icône guitare" />
          <h3>Passe-temps musicaux</h3>
          <p>En dehors du code, je suis un mélomane-guitariste passionné.</p>
        </div>
        <div className="skill-box">
          <img src={indexIcons.iconBookOpen} alt="icône livre ouvert" />
          <h3>Autres intérêts</h3>
          <p>
            Je suis également un adepte du street workout et un passionné des
            dernières technologies.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <h2>Prêt à collaborer ?</h2>
        <p>
          Contactez-moi et découvrez comment nous pouvons créer ensemble des
          expériences web mémorables.
        </p>{" "}
        <p>
          Je suis passionné par la création de solutions innovantes et je suis
          impatient de discuter de votre prochain projet avec vous !
        </p>
        <button className="cta-button">
          <Link to="/contact">Me contacter</Link>
        </button>
      </section>
    </div>
  );
}

export default About;
