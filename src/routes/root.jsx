import NavBar from "../components/NavBar";
import { Route, Routes } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageParcours from "../pages/PageParcours";
import PageSoftSkills from "../pages/PageSoftSkills";
import PageHardSkills from "../pages/PageHardSkills";
import PageArticles from "../pages/PageArticles";
import PageSingleArticle from "../pages/PageSingleArticle";
import PageContact from "../pages/PageContact";
import getCurrentYear from "../functions/getCurrentYear";
import iconGithubSquare from "../assets/icons/iconGithubSquare.svg";
import iconLinkedin from "../assets/icons/iconLinkedin.svg";

export default function Root() {
  const currentYear = getCurrentYear();

  return (
    <>
      <header>
        <h1>GDevWeb - Développeur web</h1>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/home" element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/parcours" element={<PageParcours />} />
          <Route path="/softskills" element={<PageSoftSkills />} />
          <Route path="/hardskills" element={<PageHardSkills />} />
          <Route path="/articles/*" element={<PageArticles />}>
            <Route path=":id" element={<PageSingleArticle />} />
          </Route>
          <Route path="articles/:id" element={<PageSingleArticle />} />
          <Route path="/contact" element={<PageContact />} />
        </Routes>
      </main>
      <footer>
        <div id="copyright">
          <h4>©️{currentYear} Dammaretz Gaëtan - Tous droits réservés</h4>
        </div>
        <div id="socialLinks">
          <h5>Retrouvez-moi sur </h5>
          <h5>
            <a href="https://github.com/GDevWeb">
              <img src={iconGithubSquare} alt="icon Github" className="icons" />
              Github
            </a>
          </h5>
          <h5>
            <a href="https://www.linkedin.com/in/ga%C3%ABtan-dammaretz/">
              <img src={iconLinkedin} alt="icon Linkedin" className="icons" />
              Linkedin
            </a>
          </h5>
        </div>
      </footer>
    </>
  );
}
