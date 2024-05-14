import { Link } from "react-router-dom";
import "../sass/aboutMe.scss";
import indexIcons from "../assets/icons/indexIcons";

function About() {
  // 1.State:

  // 2.Behavior :
  const { iconHandShake, iconCode, iconGuitar, iconBookOpen } = indexIcons;
  // 3.Render :

  return (
    <div id="mainContainer" className="aboutContainer">
      <section className="intro-section">
        <figure id="handShake-container">
          <img src={iconHandShake} alt="Ma photo" />
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
          <img src={iconCode} alt="icône balise code" />
          <h3>Compétences en développement</h3>
          <p>
            Mon parcours comprend une série de projets personnels et informels
            où j'ai pu mettre en pratique mes connaissances en développement
            JavaScript et React.
          </p>
        </div>
        <div className="skill-box">
          <img src={iconGuitar} alt="icône guitare" />
          <h3>Passe-temps musicaux</h3>
          <p>En dehors du code, je suis un mélomane-guitariste passionné.</p>
        </div>
        <div className="skill-box">
          <img src={iconBookOpen} alt="icône livre ouvert" />
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

/* pour icone handShake correction nom*/