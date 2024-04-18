import { Link } from "react-router-dom";
import "../../sass/projectItem.scss"

function ProjectItem({ id, title, picture, description, category }) {
  return (
    <div className="projectItem">
      <Link to={`/projects/${id}`} className="linkProject">
        <figure className="projectPicture">
          <img src={picture} alt={`illustration de ${title}`} />
        </figure>
        <p className="projectItemTitle">{title}</p>
        <p className="articleContent">{description}</p>
        <p className="projectTags">
          <span className="projectLabel">{category}</span> 
        </p>
      </Link>
    </div>
  );
}

export default ProjectItem;
