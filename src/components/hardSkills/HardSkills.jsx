import "../../sass/hardSkills.scss";
import hardSkillsArray from "./hardSkillsArray";
import CardItem from "../CardItem";
import { useState, useRef, useLayoutEffect } from "react";

function HardSkills() {
  const [selectedCategory, setSelectedCategory] = useState("both");
  const [filterSkills, setFilterSkills] = useState(hardSkillsArray);
  const hardSkillsRef = useRef();

  const handleFilter = (category) => {
    setSelectedCategory(category);

    if (category === "both") {
      setFilterSkills([...hardSkillsArray]);
    } else {
      const filtered = hardSkillsArray.filter((skills) =>
        skills.category.includes(category)
      );
      setFilterSkills([...filtered]);
    }
  };

  useLayoutEffect(() => {
    hardSkillsRef.current.childNodes.forEach((skillElement) => {
      skillElement.style.opacity = 1;
      skillElement.classList.toggle("fade-in");
    });
  }, [filterSkills]);

  const hardSkillsSet = filterSkills.map((hardSkills) => {
    return (
      <CardItem
        key={hardSkills.title}
        title={hardSkills.title}
        icon={hardSkills.icon}
        // content={hardSkills.content}
        link={hardSkills.link}
        fileName={hardSkills.fileName}
        linkText={hardSkills.grade}
      />
    );
  });
  return (
    <div id="mainContainer" className="hardSkillsContainer">
      <div id="hardSkillsTitle">
        <h2>HardSkills</h2>
        <div id="filter">
          <div id="filterName">
            <p>Filtrer par catégorie :</p>
          </div>
          <div id="checkBoxesFilterContainer">
            <label htmlFor="both">
              <input
                type="radio"
                name="category"
                id="both"
                value="both"
                checked={selectedCategory === "both"}
                onChange={() => handleFilter("both")}
              />
              tous
            </label>
            <label htmlFor="frontend">
              <input
                type="radio"
                name="category"
                id="frontend"
                value="frontend"
                checked={selectedCategory === "frontend"}
                onChange={() => handleFilter("frontend")}
              />
              frontend
            </label>
            <label htmlFor="backend">
              <input
                type="radio"
                name="category"
                id="backend"
                value="backend"
                checked={selectedCategory === "backend"}
                onChange={() => handleFilter("backend")}
              />
              backend
            </label>
            <label htmlFor="tooling">
              <input
                type="radio"
                name="category"
                id="tooling"
                value="tooling"
                checked={selectedCategory === "tooling"}
                onChange={() => handleFilter("tooling")}
              />
              tooling
            </label>
          </div>
        </div>
      </div>
      <section className="intro-section">
        <h3>Développeur frontend mais pas que ...</h3>
        <p>
          En tant que développeur, je suis passionné par la création
          d'expériences web uniques et engageantes.
        </p>
        <p>
          {" "}
          Mon savoir-faire se concentre principalement sur le développement
          front-end, où je combine créativité et maîtrise technique pour donner
          vie à des interfaces utilisateur innovantes.
        </p>
        <p>
          {" "}
          Je suis constamment à la recherche de nouvelles technologies et de
          nouvelles méthodes pour améliorer mes compétences et relever de
          nouveaux défis.
        </p>
        <p>
          {" "}
          Tout en mettant l'accent sur le front-end, je suis également ouvert à
          explorer d'autres domaines du développement, ce qui me permet
          d'élargir mes horizons et de continuer à évoluer en tant que
          développeur web.{" "}
        </p>
      </section>

      <div id="hardSkillsList" ref={hardSkillsRef}>
        {hardSkillsSet}
      </div>
    </div>
  );
}

export default HardSkills;
