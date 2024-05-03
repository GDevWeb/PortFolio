import { useParams } from "react-router";
import projectsArray from "./projectsArray";
import illustrationDefault from "/images/illustrationDefault.jpg";
import { Link } from "react-router-dom";
import "../../sass/singleProject.scss";

function SingleProject() {
  const { id } = useParams();

  const project = projectsArray.find(
    (project) => project.id === parseInt(id, 10)
  );

  const { title, picture, description, link, category } = project;
  const splittedCategory = category.join(", ");

  return (
    <>
      <div id="mainContainer" className="singleProjectContainer">
        <div id="projectHeader">
          <h2>{title}</h2>
        </div>
        <figure id="projectIllustration">
          <img
            src={picture ? picture : illustrationDefault}
            alt={`image du projet ${title}`}
          />
        </figure>
        <section id="section-projectDetails">
          <h3>Détails du projet</h3>
          <ul>
            <li>
              <strong>Demande :</strong> [Description de la demande du client]
            </li>
            <li>
              <strong>Solution proposée :</strong> [Description de la solution
              proposée]
            </li>
            <li>
              <strong>Difficultés rencontrées :</strong> [Description des
              difficultés éventuelles]
            </li>
            <li>
              <strong>Améliorations envisageables :</strong> [Idées
              d'améliorations pour le projet]
            </li>
          </ul>
        </section>
        <section id="section-description">
          <h3>Résumé</h3>
          <p>{description}</p>
        </section>
        <section id="section-projectCategory">
          <p>
            Tags : <span className="projectTags">{splittedCategory}</span>
          </p>
        </section>
        <section id="section-projectLink">
          <button className="cta-button">
            <a href={link}>Voir le projet</a>
          </button>
        </section>
      </div>
      <div id="navigation">
        <button className="cta-button">
          <Link to={"/projects"}>⬅️Retour à la liste des projets</Link>
        </button>
      </div>
    </>
  );
}

export default SingleProject;
