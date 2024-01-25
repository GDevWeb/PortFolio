import Articles from "../components/articles/articles";
import { useNavigate } from "react-router-dom";

function PageArticles() {
  const navigate = useNavigate();

  return (
    <Articles
      onArticleClick={(articleId) => navigate(`/articles/${articleId}`)}
    />
  );
}

export default PageArticles;
