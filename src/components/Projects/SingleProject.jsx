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

  const {
    title,
    picture,
    description,
    request,
    solution,
    difficulties,
    upgrades,
    link,
    category,
  } = project;
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
              <span>Demande :</span>{" "}
              {request ? request : "Informations à venir"}
            </li>
            <li>
              <span>Solution proposée :</span>{" "}
              {solution ? solution : "Informations à venir"}
            </li>
            <li>
              <span>Difficultés rencontrées :</span>{" "}
              {difficulties ? difficulties : "Informations à venir"}
            </li>
            <li>
              <span>Améliorations envisageables :</span>{" "}
              {upgrades ? upgrades : "Informations à venir"}
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

//note
