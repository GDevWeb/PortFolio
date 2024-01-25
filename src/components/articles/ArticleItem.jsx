import { Link } from "react-router-dom";

function ArticleItem({ id, picture, title, author, content, date, tags }) {
  return (
    <div className="articleItem">
      <Link to={`/articles/${id}`} className="linkArticle">
        <figure className="articlePicture">
          <img src={picture} alt={`illustration de ${title}`} />
        </figure>
        <p className="articleItemTitle">{title}</p>
        <p className="articleAuthor">
          <span className="articleLabel">Auteur:</span> {author}
        </p>
        <p className="articleContent">{content}</p>
        <p className="articleDate">
          <span className="articleLabel">Date de publication:</span> {date}
        </p>
        <p className="articleTags">
          <span className="articleLabel">Tags:</span> {tags}
        </p>
      </Link>
    </div>
  );
}

export default ArticleItem;
