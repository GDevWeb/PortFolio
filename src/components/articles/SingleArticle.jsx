import { useParams, Link } from "react-router-dom";
import articlesList from "./articlesList";
import "../../sass/singleArticle.scss";
import indexImageProjects from "/public/images/projects/indexImageProjects";

function SingleArticle() {
  const { id } = useParams();

  const article = articlesList.find(
    (article) => article.id === parseInt(id, 10)
  );

  if (!article) {
    return <p>Article non trouvé !</p>;
  }

  const { title, picture, content, date, author, tags } = article;
  const splittedTags = tags.join(", ");

  return (
    <>
      <div id="mainContainer" className="singleArticleContainer">
        <h2>{title}</h2>
        <figure>
          <img src={picture ? picture : indexImageProjects.imageProjectInProgress} alt="" />
        </figure>
        <div id="articleContent">
          <p>{content}</p>
        </div>
        <div id="articleDetail">
          <p className="articleLabel">
            Publié le : <span>{date}</span>
          </p>
          <p className="articleLabel">
            Auteur :<span> {author}</span>
          </p>
          <p className="articleLabel">
            Tags : <span>{splittedTags}</span>
          </p>
        </div>
      <div id="navigation">
        <button className="cta-button">
          <Link to={"/articles"}>⬅️Retour à la liste des articles</Link>
        </button>
      </div>
      </div>
    </>
  );
}

export default SingleArticle;

// comment