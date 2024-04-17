import { useParams } from "react-router";
import projectsArray from "./projectsArray";
import illustrationDefault from "/images/illustrationDefault.jpg";

function SingleProject() {
  const { id } = useParams();

  const project = projectsArray.find(
    (project) => project.id === parseInt(id, 10)
  );

  const { title, picture, description, link, category } = project;
  const splittedCategory = category.join(", ");

  return (
    <div id="singleArticleContainer">
      <div id="articleTitle">
        <h2>{title}</h2>
      </div>
      <figure>
        <img src={picture ? picture : illustrationDefault} alt="" />
      </figure>
      <div id="articleContent">
        <h3>Résumé</h3>
        <p>{description}</p>
      </div>
      <div id="articleDetail">
        <p>
        <p>
          <a href={link}>Voir le projet </a>
        </p>
          <span className="articleLabel">Tags : </span>
          {splittedCategory}
        </p>
      </div>
    </div>
  );
}

export default SingleProject;

// rework add sections  résumé - technologie - améliorations