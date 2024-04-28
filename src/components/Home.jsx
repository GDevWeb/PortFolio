import { Link } from "react-router-dom";
import "../sass/home.scss";
import myAvatar from "../../public/images/avatar2.jpg";
import indexImageProjects from "../../public/images/projects/indexImageProjects";

function Home() {
  return (
    <div id="homeContainer">
      <section className="intro-section">
        <h2>Bienvenue sur mon portFolio</h2>
        <p>
          Explorez mes projets et découvrez mon expertise en développement web
          frontend.
        </p>
        <button className="cta-button">
          <Link to="/contact">Voir mes réalisations</Link>
        </button>
      </section>
      <section className="about-me-section">
        <h2>À Propos de Moi</h2>
        <p>
          Découvrez mon parcours, mes compétences et mes passions en tant que
          développeur web.
        </p>
        <button className="cta-button">
          <Link to="/about">En savoir plus</Link>
        </button>
      </section>

      <section className="contact-section">
        <h2>Contactez-moi</h2>
        <p>
          Besoin de plus d'informations ou envie de discuter de votre prochain
          projet ? Contactez-moi dès maintenant !
        </p>
        <button className="cta-button">
          <Link to="/about">Me contacter</Link>
        </button>
      </section>

      <section className="portfolio-section" id="portfolio">
        <h2>Projets Récents</h2>
        <div className="project-card">
          <h3>Projet 1</h3>
          <img src={indexImageProjects.imagePassionGuitar} alt="Projet 1" />
          <p>Une brève description du projet 1.</p>
          <button className="cta-button">
            <a href={"#"} className="cta-button">
              Découvrir
            </a>
          </button>
        </div>
        <div className="project-card">
          <h3>Projet 2</h3>
          <img src={indexImageProjects.imagePassionGuitar} alt="Projet 2" />
          <p>Une brève description du projet 2.</p>
          <button className="cta-button">
            <a href={"#"} className="cta-button">
              Découvrir
            </a>
          </button>
        </div>
      </section>

      <section className="id-section">
        <div className="id-card">
          <img src={myAvatar} alt="Ma photo" width="200px" />
          <h1>Gaëtan Dammaretz</h1>
          <h2>Développeur web</h2>
          <div className="content">
            <article>
              <p>
                Bienvenue sur mon univers numérique ! Je suis passionné par le
                développement web et j'ai acquis une solide expertise en HTML,
                CSS, JavaScript et React.
              </p>
              <p>Je reconnais un attrait pour l'U.I. et l'U.X</p>
              <p>
                Curieux et avide de connaissances, j'explore sans cesse de
                nouveaux horizons dans le domaine du web.
              </p>
              <p>
                Mon parcours professionnel m'a permis d'explorer différents
                domaines, mais c'est dans le développement web que je trouve ma
                véritable passion.
              </p>
              <p>
                Explorez mon portfolio pour découvrir mes projets et voir
                comment je marie la créativité à la technologie.
              </p>
              <p>
                <Link to="/about">En savoir plus sur moi</Link>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="articles-section">
        <h2 className="title-section">Derniers articles</h2>
        <div className="article-card">
          <h3>Article 1</h3>
          <img src={indexImageProjects.imagePassionGuitar} alt="Projet 2" />
          <p>Une brève description de l'article.</p>
          <button className="cta-button">
            <a href={"#"} className="cta-button">
              Découvrir
            </a>
          </button>
        </div>
        <div className="article-card">
          <h3>Article 2</h3>
          <img src={indexImageProjects.imagePassionGuitar} alt="Projet 2" />
          <p>Une brève description de l'article.</p>
          <button className="cta-button">
            <a href={"#"} className="cta-button">
              Découvrir
            </a>
          </button>
        </div>
        <div className="article-card">
          <h3>Article 3</h3>
          <img src={indexImageProjects.imagePassionGuitar} alt="Projet 2" />
          <p>Une brève description de l'article.</p>
          <button className="cta-button">
            <a href={"#"} className="cta-button">
              Découvrir
            </a>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
