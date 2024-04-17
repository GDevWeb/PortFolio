import "../../sass/projects.scss";
import projectsArray from "./projectsArray";
import CardItem from "../../components/CardItem";

function Projects() {
  const projectList = projectsArray.map((project) => {
    return (
      <CardItem
        key={project.title}
        title={project.title}
        icon={project.image}
        link={project.link}
        linkText={"Voir le projet"}
      />
    );
  });

  return (
    <div id="projectsContainer">
      <div id="projectTitle">
        <h2>Mes projets</h2>
      </div>
      <article>
        <h3>Retrouver ma liste d'une sélection de projets</h3>
        <p>
          Découvrez ci-dessous quelques-uns des projets sur lesquels j'ai
          travaillé. Chacun d'eux représente une expérience unique dans laquelle
          j'ai mis en œuvre mes compétences en développement web pour créer des
          solutions innovantes et fonctionnelles.
        </p>{" "}
      </article>

      <div id="projectsList">{projectList}</div>
    </div>
  );
}

export default Projects;

// rework 