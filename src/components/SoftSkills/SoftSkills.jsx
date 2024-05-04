import "../../sass/softSkills.scss";
import "./softSkillsArray.jsx";
import softSkillsArray from "./softSkillsArray.jsx";
import CardItem from "../CardItem.jsx";

function SoftSkills() {
  // 1.State :

  // 2.Behavior :

  // 3.Render :
  return (
    <div id="mainContainer" className="softSkillsContainer">
      <div id="softSkillsTitle">
        <h2>SoftSkills</h2>
      </div>

      <div id="softSkillsList">
        {softSkillsArray.map((softSkill) => {
          const { id, title, icon, content } = softSkill;

          return (
            <CardItem key={id} title={title} icon={icon} content={content} />
          );
        })}
      </div>
    </div>
  );
}

export default SoftSkills;
