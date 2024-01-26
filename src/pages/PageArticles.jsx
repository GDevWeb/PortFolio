import { useNavigate } from "react-router-dom";
import Articles from "../components/articles/ArticlesCopy";


function PageArticles() {
  const navigate = useNavigate();

  return (
    <Articles onArticleClick={(articleId) => navigate(`/articles/${articleId}`)}/>
    );
}

export default PageArticles;
