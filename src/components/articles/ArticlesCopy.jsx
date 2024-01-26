import ArticleItem from "./ArticleItem";
import articlesList from "./articlesList";
import illustrationDefault from "/images/illustrationDefault.jpg";
import "../../sass/articles.scss";

function Articles() {
  const articlePublication = articlesList.map((article) => {
    const { title, picture, date, author, tags } = article;
    const splittedTags = tags.join(", ");

    return (
      <ArticleItem
        key={article.id}
        id={article.id}
        picture={picture ? article.picture : illustrationDefault}
        title={title}
        author={author}
        date={date}
        tags={splittedTags}
      />
    );
  });
  return (
    <div id="articlesContainer">
      <div id="articleTitle">
        <h2>Articles</h2>
      </div>
      {articlePublication}
    </div>
  );
}

export default Articles;
