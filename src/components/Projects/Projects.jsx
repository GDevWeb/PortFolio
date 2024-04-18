import projectsArray from "./projectsArray";
import ProjectItem from "./ProjectItem";
import illustrationDefault from "/images/illustrationDefault.jpg";
import "../../sass/projects.scss";

function Projects() {
  const projectList = projectsArray.map((project) => {
    const {title, picture} = project;
    return (
      <ProjectItem
        key={project.id}
        id={project.id}
        picture={picture ? project.picture : illustrationDefault}
        title={title}
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
        <p className="projectIntroduction">
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
