import { useNavigate } from "react-router-dom";
import Articles from "../components/articles/Articles";


function PageArticles() {
  const navigate = useNavigate();

  return (
    <Articles onArticleClick={(articleId) => navigate(`/articles/${articleId}`)}/>
    );
}

export default PageArticles;
