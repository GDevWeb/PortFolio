import { NavLink } from "react-router-dom";
import "../sass/navBar.scss";

function NavBar() {
  return (
    <nav id="navBar">
      <ul>
        <NavLink to="/" className={"navLink"} activeClassName="activeLink">Accueil</NavLink>
        <NavLink to="/about" className={"navLink"} activeClassName="activeLink">À propos</NavLink>
        <NavLink to="/parcours" className={"navLink"} activeClassName="activeLink">Mon parcours</NavLink>
        <NavLink to="/softSkills" className={"navLink"} activeClassName="activeLink">SoftSkills</NavLink>
        <NavLink to="/hardSkills" className={"navLink"} activeClassName="activeLink">HardSkills</NavLink>
        <NavLink to="/articles" className={"navLink"} activeClassName="activeLink">Articles</NavLink>
        <NavLink to="/contact"className={"navLink"} activeClassName="activeLink"> Contact</NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
