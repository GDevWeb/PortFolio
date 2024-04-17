import { useParams } from "react-router";
import projectsArray from "../components/Projects/projectsArray";
import SingleProject from "../components/Projects/SingleProject";

function PageSingleProject() {
  const { id } = useParams();

  const project = projectsArray.find((project) => project.id === (id, 10));

  if (!project) {
    return <p>Projet non trouvé !</p>;
  }

  return (
    <>
      <SingleProject />
    </>
  );
}

export default PageSingleProject;
