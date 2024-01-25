import { useParams } from "react-router-dom";
import articlesList from "../components/articles/articlesList";
import SingleArticle from "../components/articles/SingleArticle";

function PageSingleArticle() {
  const { id } = useParams();

  const article = articlesList.find(
    (article) => article.id === parseInt(id, 10)
  );

  if (!article) {
    return <p>Article non trouvé !</p>;
  }

  return (
    <>
    <SingleArticle/>
    </>
  );
}

export default PageSingleArticle;
