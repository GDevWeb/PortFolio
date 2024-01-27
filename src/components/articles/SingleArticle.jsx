import { useParams } from "react-router-dom";
import articlesList from "./articlesList";
import "../../sass/singleArticle.scss";
import illustrationDefault from "/images/illustrationDefault.jpg";

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
    <div id="singleArticleContainer">
      <div id="articleTitle">
        <h2>{title}</h2>
      </div>
      <figure>
        <img src={picture ? picture : illustrationDefault} alt="" />
      </figure>
      <div id="articleContent">
        <p>{content}</p>
      </div>
      <div id="articleDetail">
        <p>
          <span className="articleLabel">Publié le : </span>
          {date}
        </p>
        <p>
          <span className="articleLabel">Auteur : </span> {author}
        </p>
        <p>
          <span className="articleLabel">Tags : </span>
          {splittedTags}
        </p>
      </div>
    </div>
  );
}

export default SingleArticle;
