import projectsArray from "./projectsArray";
import CardItem from "../../components/CardItem";

function Projects() {
  const projectList = projectsArray.map((project) => {
    return (
      <CardItem
        key={project.title}
        title={project.title}
        icon={project.image}
        content={project.description}
        link={project.link}
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          libero autem temporibus nulla ullam dolor natus quo reprehenderit
          amet? Est harum recusandae fuga! Velit commodi delectus earum ullam
          sed cum.
        </p>
      </article>

      <div id="projectsList"></div>
      {projectList}
    </div>
  );
}

export default Projects;
