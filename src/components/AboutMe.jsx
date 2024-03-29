import "../sass/aboutMe.scss";
import myAvatar from "/images/avatar2.jpg";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div id="aboutMeContainer">
      <div id="aboutMeTitle">
        <h2>À propos</h2>
      </div>

    <div id="avatar">
      <figure>
        <img src={myAvatar} alt={"Ma photo via Leonardo A.I"} />
      </figure>
    </div>

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
            Bien que je n'aie pas encore eu d'expérience formelle en tant que
            développeur web, j'ai travaillé sur divers projets officieux et
            informels, mettant en pratique mes compétences en développement
            JavaScript et React. Je suis passionné par la création de solutions
            innovantes et je suis impatient de partager avec vous mes
            expériences et les leçons que j'ai apprises en cours de route.
          </p>
          <p>
            En dehors du code, je suis un mélomane-guitariste, un adepte du
            street workout et un passionné des dernières technologies. Mon
            approche du développement web va au-delà de simplement écrire du
            code ; elle vise à harmoniser le design et la fonctionnalité pour
            créer des expériences utilisateur exceptionnelles.
          </p>
          <p>
            Bien que mon expérience professionnelle formelle dans le
            développement web soit limitée, j'ai consacré du temps à explorer et
            à développer mes compétences de manière autodidacte. Mon parcours
            comprend une série de projets personnels et informels où j'ai pu
            mettre en pratique mes connaissances en développement JavaScript et
            React. Je suis passionné par l'apprentissage continu et par
            l'opportunité de collaborer avec d'autres professionnels pour créer
            des expériences web mémorables.
          </p>
          <p>
            <Link to="/contact">Prêt à collaborer ? Contactez-moi ici</Link> et
            découvrez comment nous pouvons créer ensemble des expériences web
            mémorables. Je suis passionné par la création de solutions
            innovantes et je suis impatient de discuter de votre prochain projet
            avec vous !
          </p>
        </article>
      </div>
    </div>
  );
}

export default AboutMe;

// hello
