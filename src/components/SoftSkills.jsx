import "../sass/softSkills.scss";
import CardItem from "./CardItem";
import icons from "../assets/icons/indexIcons";

function SoftSkills() {
  return (
    <div id="mainContainer" className="softSkillsContainer">
      <div id="softSkillsTitle">
        <h2>SoftSkills</h2>
      </div>

      <div id="softSkillsList">
        <CardItem
          icon={icons.iconSliders}
          title={"Agilité professionnelle"}
          content={"Capacité à s'adapter à des environnements professionnels variés."}
        />

        <CardItem
          title={"Persévérance inébranlable"}
          icon={icons.iconTrophy}
          content={"Persévérance dans la poursuite des objectifs malgré les défis."}
        />

        <CardItem
          title={"Innovation inspirée"}
          icon={icons.iconPaintBrush}
          content={"Sensibilité créative dans le développement web."}
        />

        <CardItem
          title={"Fascination technologique"}
          icon={icons.iconLapTop}
          content={"Intérêt constant pour les dernières avancées technologiques."}
        />

        <CardItem
          title={"Collaboration harmonieuse"}
          icon={icons.iconUsers}
          content={"Capacité à collaborer efficacement au sein d'une équipe."}
        />

        <CardItem
          title={"Clarté et impact"}
          icon={icons.iconComments}
          content={"Clarté et efficacité dans la communication professionnelle."}
        />

        <CardItem
          title={"Force face à l'adversité"}
          icon={icons.iconShield}
          content={"Capacité à surmonter les défis et à rebondir après des situations difficiles. Faire preuve de persévérance et de résistance face aux obstacles professionnels, tout en maintenant une attitude positive et constructive."}
        />
      </div>
    </div>
  );
}

export default SoftSkills;
