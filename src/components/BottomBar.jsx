import { useState } from "react";
import { NavLink } from "react-router-dom";
import getCurrentYear from "../functions/getCurrentYear";
import "../sass/BottomBar.scss";
import indexIcons from "../assets/icons/indexIcons";

function BottomBar() {
  // 1.State :
  const [toggleBottomBar, setToggleBottomBar] = useState(false);
  const currentYear = getCurrentYear();

  // 2.Comportement:
  const handleBottomBar = () => {
    setToggleBottomBar(!toggleBottomBar);
  };

  // 3.Render:
  return (
    <nav id="BottomBar">
      <ul className={toggleBottomBar ? "active" : "hide"}>
        <NavLink
          to="/"
          onClick={handleBottomBar}
          className={"navLink"}
          activeClassName="activeLink"
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          onClick={handleBottomBar}
          className={"navLink"}
          activeClassName="activeLink"
        >
          À propos
        </NavLink>
        <NavLink
          to="/parcours"
          onClick={handleBottomBar}
          className={"navLink"}
          activeClassName="activeLink"
        >
          Mon parcours
        </NavLink>
        <NavLink
          to="/softSkills"
          onClick={handleBottomBar}
          className={"navLink"}
          activeClassName="activeLink"
        >
          SoftSkills
        </NavLink>
        <NavLink
          to="/hardSkills"
          onClick={handleBottomBar}
          className={"navLink"}
          activeClassName="activeLink"
        >
          HardSkills
        </NavLink>
        <NavLink
          to="/projects"
          onClick={handleBottomBar}
          className={"navLink"}
          activeClassName="activeLink"
        >
          Projets
        </NavLink>
        <NavLink
          to="/articles"
          onClick={handleBottomBar}
          className={"navLink"}
          activeClassName="activeLink"
        >
          Articles
        </NavLink>
        <NavLink
          to="/contact"
          onClick={handleBottomBar}
          className={"navLink"}
          activeClassName="activeLink"
        >
          {" "}
          Contact
        </NavLink>
      </ul>
      <div id="secondMainContainer">
        <div id="socialLinks">
          <h5>
            <a href="https://github.com/GDevWeb">
              <img
                src={indexIcons.iconGithub}
                alt="icon Github"
                className="icons"
              />
              Github
            </a>
          </h5>
          <h5>
            <a href="https://www.linkedin.com/in/ga%C3%ABtan-dammaretz/">
              <img
                src={indexIcons.iconLinkedin}
                alt="icon Linkedin"
                className="icons"
              />
              Linkedin
            </a>
          </h5>

        <div className="container-navIcon">
          <img
            onClick={handleBottomBar}
            src={toggleBottomBar ? indexIcons.iconXMark : indexIcons.iconBars}
            alt="icon barre de navigation"
            className="navIcon"
            aria-label="bouton de la barre de navigation"
          />
        </div>
      </div>
          <div id="copyright">
            <p>©️{currentYear} Dammaretz Gaëtan - Tous droits réservés</p>
          </div>
        </div>
    </nav>
  );
}

export default BottomBar;
