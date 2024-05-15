import ArticleItem from "./ArticleItem";
import articlesList from "./articlesList";
import indexImageProjects from "/public/images/projects/indexImageProjects";
import "../../sass/articles.scss";

function Articles() {
  const articlePublication = articlesList.map((article) => {
    const { title, picture, date, author, tags } = article;
    const splittedTags = tags.join(", ");

    return (
        <ArticleItem
          key={article.id}
          id={article.id}
          picture={picture ? article.picture : indexImageProjects.imageProjectInProgress}
          title={title}
          author={author}
          date={date}
          tags={splittedTags}
        />
    );
  });
  return (
    <div id="mainContainer" className="articlesContainer">
      <div id="articleTitle">
        <h1 className="important-word">Articles</h1>
      </div>
      {articlePublication}
    </div>
  );
}

export default Articles;
