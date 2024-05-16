import softSkillsArray from "./softSkillsArray";
import CardItem from "../CardItem";
import ErrorMessage from "../Errors/ErrorMessage";
import "../../sass/softSkills.scss";

function SoftSkills() {
  // 1.State :

  // 2.Behavior :
  const softSkillsList = softSkillsArray.map((softSkill) => {
    const { id, title, icon, altAccess, content, link, fileName, grade } =
      softSkill;
    return (
      <CardItem
        key={id}
        title={title}
        icon={icon}
        iconAlt={altAccess}
        // content={content}
        link={link}
        fileName={fileName}
        linkText={grade}
      />
    );
  });
  // 3.Render :
  return (
    <div id="mainContainer" className="softSkillsContainer">
      <div id="softSkillsTitle">
        <h2>SoftSkills</h2>
      </div>

      <div id="softSkillsList">
        {softSkillsList.length > 0 ? (
          softSkillsList
        ) : (
          <ErrorMessage
            contentErrorMessage={"Oups, La liste des compétences est vide !"}
          />
        )}
      </div>
    </div>
  );
}

export default SoftSkills;
