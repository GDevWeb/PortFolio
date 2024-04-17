import Header from "../components/Header";
import BottomBar from "../components/BottomBar";
import { Route, Routes } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageParcours from "../pages/PageParcours";
import PageSoftSkills from "../pages/PageSoftSkills";
import PageHardSkills from "../pages/PageHardSkills";
import PageProjects from "../pages/PageProjects";
import PageSingleProject from "../pages/PageSingleProject";
import PageArticles from "../pages/PageArticles";
import PageSingleArticle from "../pages/PageSingleArticle";
import PageContact from "../pages/PageContact";

export default function Root() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/home" element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/parcours" element={<PageParcours />} />
          <Route path="/softskills" element={<PageSoftSkills />} />
          <Route path="/hardskills" element={<PageHardSkills />} />
          <Route path="/projects/*" element={<PageProjects />}>
            <Route path=":id" element={<PageSingleProject />} />
          </Route>
          <Route path="projects/:id" element={<PageSingleProject />} />
          
          <Route path="/articles/*" element={<PageArticles />}>
            <Route path=":id" element={<PageSingleArticle />} />
          </Route>
          <Route path="articles/:id" element={<PageSingleArticle />} />
          <Route path="/contact" element={<PageContact />} />
        </Routes>
      </main>
      <BottomBar />
    </>
  );
}
