import "@sass/harSkills.scss";
import hardSkillsArray from "./hardSkillsArray";
import CardItem from "../CardItem";
import { useState, useRef, useLayoutEffect } from "react";

function HardSkills() {
  const [selectedCategory, setSelectedCategory] = useState("both");
  const [filterSkills, setFilterSkills] = useState(hardSkillsArray);
  const harSkillsRef = useRef();

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
    harSkillsRef.current.childNodes.forEach((skillElement) => {
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
        content={hardSkills.content}
        link={hardSkills.link}
        fileName={hardSkills.fileName}
        linkText={hardSkills.linkText}
      />
    );
  });
  return (
    <div id="hardSkillsContainer">
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
      <article>
        <h3>Développeur frontend mais pas que ...</h3>
        <p>
          En tant que développeur, je me passionne particulièrement pour le
          front-end, où la fusion entre design et code donne vie à des
          expériences web uniques. Mon expertise se concentre sur les
          technologies front-end modernes, tandis que je reste ouvert et
          enthousiaste à l'idée d'explorer de nouvelles compétences et
          opportunités, y compris dans le domaine du back-end.
        </p>
      </article>

      <div id="hardSkillsList" ref={harSkillsRef}>
        {hardSkillsSet}
      </div>
    </div>
  );
}

export default HardSkills;
