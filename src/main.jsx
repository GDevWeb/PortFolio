import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.scss";
import Root from "./routes/root";
import PageHome from "./pages/PageHome";
import PageAbout from "./pages/PageAbout";
import PageParcours from "./pages/PageParcours";
import PageSoftSkills from "./pages/PageSoftSkills";
import PageHardSkills from "./pages/PageHardSkills";
import PageProjects from "./pages/PageProjects";
import PageArticles from "./pages/PageArticles";
import PageSingleArticle from "./pages/PageSingleArticle";
import PageContact from "./pages/PageContact";
import PageError from "./pages/PageError";
import postsPageLoader from "./functions/postsPageLoader";
import PageSingleProject from "./pages/PageSingleProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: "home",
        element: <PageHome />,
      },
      {
        path: "about",
        element: <PageAbout />,
      },
      {
        path: "parcours",
        element: <PageParcours />,
      },
      {
        path: "softSkills",
        element: <PageSoftSkills />,
      },
      {
        path: "hardSkills",
        element: <PageHardSkills />,
      },
      {
        path: "projects",
        element: <PageProjects />,
        loader: postsPageLoader,
        children: [
          {
            path: "",
            element: <PageProjects />,
          },
          {
            path: ":id",
            element: <PageSingleProject />,
          },
        ],
      },
      {
        path: "articles",
        element: <PageArticles />,
        loader: postsPageLoader,
        children: [
          {
            path: "",
            element: <PageArticles />,
          },
          {
            path: ":id", //articleDetail
            element: <PageSingleArticle />,
          },
        ],
      },
      {
        path: "contact",
        element: <PageContact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
