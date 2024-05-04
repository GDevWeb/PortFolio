import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import getCurrentYear from "../functions/getCurrentYear";
import "../sass/bottomBar.scss";
import indexIcons from "../assets/icons/indexIcons";

function BottomBar() {
  // 1.State :
  const [toggleBottomBar, setToggleBottomBar] = useState(false);
  const currentYear = getCurrentYear();

  //1.a.Effect to handle closing BottomBar when a click is detected outside it
  useEffect(() => {
    const handleWindowClick = (e) => {
      // Check if the click is outside hte BottomBar
      if (toggleBottomBar) {
        if (!document.getElementById("BottomBar").contains(e.target)) {
          // Close the BottomBar if the click is outside it
          setToggleBottomBar(false);
        }
      }
    };

    // Add event listener for window click
    window.addEventListener("click", handleWindowClick);

    // My cleanUp function to remove the event
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [toggleBottomBar]);

  // 2.Comportement:
  const handleBottomBar = () => {
    setToggleBottomBar(!toggleBottomBar);
  };

  // 3.Render:
  return (
    <div id="BottomBar">
      <nav id="navBarBottom">
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
      </nav>
      <div id="secondMainContainer">
        <div id="socialLinks">
          <h4>
            <a href="https://github.com/GDevWeb">
              <img
                src={indexIcons.iconGithub}
                alt="icon Github"
                className="icons"
              />
              Github
            </a>
          </h4>
          <h4>
            <a href="https://www.linkedin.com/in/ga%C3%ABtan-dammaretz/">
              <img
                src={indexIcons.iconLinkedin}
                alt="icon Linkedin"
                className="icons"
              />
              Linkedin
            </a>
          </h4>

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
    </div>
  );
}

export default BottomBar;
