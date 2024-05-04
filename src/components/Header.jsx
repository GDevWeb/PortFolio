import { NavLink } from "react-router-dom";
import "../sass/header.scss";
import "../sass/navBar.scss";
function Header() {
  // 1.State:

  // 2.Comportement:

  // 3.Render:
  return (
    <header>
      <div id="headerText">
        <h1>Dammaretz Gaëtan</h1>
        <h2>Développeur Web</h2>
      </div>

      <nav id="navBar">
        <ul>
          <NavLink to="/" className={"navLink"} activeClassName="activeLink">
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={"navLink"}
            activeClassName="activeLink"
          >
            À propos
          </NavLink>
          <NavLink
            to="/parcours"
            className={"navLink"}
            activeClassName="activeLink"
          >
            Mon parcours
          </NavLink>
          <NavLink
            to="/softSkills"
            className={"navLink"}
            activeClassName="activeLink"
          >
            SoftSkills
          </NavLink>
          <NavLink
            to="/hardSkills"
            className={"navLink"}
            activeClassName="activeLink"
          >
            HardSkills
          </NavLink>
          <NavLink
            to="/projects"
            className={"navLink"}
            activeClassName="activeLink"
          >
            Projets
          </NavLink>
          <NavLink
            to="/articles"
            className={"navLink"}
            activeClassName="activeLink"
          >
            Articles
          </NavLink>
          <NavLink
            to="/contact"
            className={"navLink"}
            activeClassName="activeLink"
          >
            {" "}
            Contact
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
