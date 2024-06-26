import projectsArray from "./projectsArray";
import ProjectItem from "./ProjectItem";
import indexImageProjects from "/public/images/projects/indexImageProjects";
import "../../sass/projects.scss";

function Projects() {
  const projectList = projectsArray.map((project) => {
    const { title, picture, resume } = project;
    return (
      <ProjectItem
        key={project.id}
        id={project.id}
        picture={picture ? project.picture : indexImageProjects.imageProjectInProgress}
        title={title}
        resume={resume}
      />
    );
  });

  return (
    <div id="mainContainer" className="projectsContainer">
      <div id="projectTitle">
        <h2 className="important-word">Mes projets</h2>
      </div>
      <section id="section-introduction">
        <h3>Retrouver ma liste d'une sélection de projets</h3>
        <p className="projectIntroduction">
          Découvrez ci-dessous quelques-uns des projets sur lesquels j'ai
          travaillé.
        </p>{" "}
      </section>

      <div id="projectsList">{projectList}</div>
    </div>
  );
}

export default Projects;

