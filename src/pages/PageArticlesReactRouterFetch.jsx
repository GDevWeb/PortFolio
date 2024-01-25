import { useEffect, useState } from "react";
import postsPageLoader from "../functions/postsPageLoader";
import { Outlet, useParams } from "react-router-dom";
import PageSingleArticle from "./PageSingleArticle";

function PageArticles() {
  const [posts, setPosts] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadData = async () => {
      const data = await postsPageLoader();
      setPosts(data);
    };

    loadData();
  }, []);

  const articleId = parseInt(id);

  if (!isNaN(articleId)) {
    return <PageSingleArticle />;
  }

  return (
    <div>
      <h1>Articles</h1>
      {posts ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default PageArticles;
