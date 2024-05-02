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
          title={"Adaptabilité"}
          content={"Capacité à s'adapter à des environnements professionnels variés."}
        />

        <CardItem
          title={"Détermination"}
          icon={icons.iconTrophy}
          content={"Persévérance dans la poursuite des objectifs malgré les défis."}
        />

        <CardItem
          title={"Créativité"}
          icon={icons.iconPaintBrush}
          content={"Sensibilité créative dans le développement web."}
        />

        <CardItem
          title={"Curiosité technologique"}
          icon={icons.iconLapTop}
          content={"Intérêt constant pour les dernières avancées technologiques."}
        />

        <CardItem
          title={"Esprit d'équipe"}
          icon={icons.iconUsers}
          content={"Capacité à collaborer efficacement au sein d'une équipe."}
        />

        <CardItem
          title={"Communication"}
          icon={icons.iconComments}
          content={"Clarté et efficacité dans la communication professionnelle."}
        />

        <CardItem
          title={"Résilience"}
          icon={icons.iconShield}
          content={"Capacité à surmonter les défis et à rebondir après des situations difficiles. Faire preuve de persévérance et de résistance face aux obstacles professionnels, tout en maintenant une attitude positive et constructive."}
        />
      </div>
    </div>
  );
}

export default SoftSkills;
