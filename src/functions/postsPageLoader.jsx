import articlesList from "../components/articles/articlesList"

const postsPageLoader = async () => {
  const limitArticle = 10;
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limitArticle}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur lors du chargement des publications :', error);
      return [];
    }
  };
  
export default postsPageLoader;