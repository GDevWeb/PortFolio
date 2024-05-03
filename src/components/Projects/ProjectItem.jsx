import { Link } from "react-router-dom";
import "../../sass/projectItem.scss";

function ProjectItem({ id, title, picture, resume, description, category }) {
  return (
    <div className="projectItem">
      <Link to={`/projects/${id}`} className="linkProject">
        <h3 className="projectItemTitle">{title}</h3>
        <figure className="projectPicture">
          <img src={picture} alt={`illustration de ${title}`} />
        </figure>
        <p className="articleContent">{description}</p>
        <p className="projectResume">{resume}</p>
        <p className="projectTags">
          <span className="projectLabel">{category}</span>
        </p>
      </Link>
    </div>
  );
}

export default ProjectItem;
