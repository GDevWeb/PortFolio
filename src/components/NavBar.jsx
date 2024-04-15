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
        <NavLink to="/" className={"navLink"} activeClassName="activeLink">
          Accueil
        </NavLink>
        <NavLink to="/about" className={"navLink"} activeClassName="activeLink">
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
      <div className="container-navIcon">
        <img
          onClick={handleNavBar}
          src={toggleNavBar ? indexIcons.iconXMark : indexIcons.iconBars}
          alt="icon barre de navigation"
          className="navIcon"
        />
      </div>
    </nav>
  );
}

export default NavBar;
