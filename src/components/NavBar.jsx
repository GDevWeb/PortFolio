import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../sass/navBar.scss";
import indexIcons from "../assets/icons/indexIcons";

function NavBar() {
  // 1.State :
  const [toggleNavBar, setToggleNavBar] = useState(false);

  // 2.Comportement:
  const handleNavBar = () => {
    setToggleNavBar(!toggleNavBar);
  };

  // 3.Render:
  return (
    <nav id="navBar">
      <ul className={toggleNavBar ? "active" : "hide"}>
        <NavLink
          to="/"
          onClick={handleNavBar}
          className={"navLink"}
          activeClassName="activeLink"
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          onClick={handleNavBar}
          className={"navLink"}
          activeClassName="activeLink"
        >
          À propos
        </NavLink>
        <NavLink
          to="/parcours"
          onClick={handleNavBar}
          className={"navLink"}
          activeClassName="activeLink"
        >
          Mon parcours
        </NavLink>
        <NavLink
          to="/softSkills"
          onClick={handleNavBar}
          className={"navLink"}
          activeClassName="activeLink"
        >
          SoftSkills
        </NavLink>
        <NavLink
          to="/hardSkills"
          onClick={handleNavBar}
          className={"navLink"}
          activeClassName="activeLink"
        >
          HardSkills
        </NavLink>
        <NavLink
          to="/projects"
          onClick={handleNavBar}
          className={"navLink"}
          activeClassName="activeLink"
        >
          Projets
        </NavLink>
        <NavLink
          to="/articles"
          onClick={handleNavBar}
          className={"navLink"}
          activeClassName="activeLink"
        >
          Articles
        </NavLink>
        <NavLink
          to="/contact"
          onClick={handleNavBar}
          className={"navLink"}
          activeClassName="activeLink"
        >
          {" "}
          Contact
        </NavLink>
      </ul>
      <div className="container-navIcon">
        <img
          onClick={handleNavBar}
          src={toggleNavBar ? indexIcons.iconXMark : indexIcons.iconBars}
          alt="icon barre de navigation"
          className="navIcon"
          aria-label="bouton de la barre de navigation"
        />
      </div>
    </nav>
  );
}

export default NavBar;
