import "../sass/professionalExperience.scss";
import CardItem from "./CardItem";
import myResume from "/docs/CV-Dammaretz_Gaêtan_Développeur_Web.pdf";

function ProfessionalExperience() {
  return (
    <div id="professionalExperienceContainer">
      <div id="professionalExperienceTitle">
        <h2>Mon parcours professionnel</h2>
      </div>

      <div id="experienceList">
        <CardItem
          title={"Transition vers le développement web"}
          content={`Après plus de 10 ans d'expérience professionnelle, j'ai entrepris une transition majeure vers le développement web. Diplômé d'un titre professionnel DWWM en octobre 2023, je suis désormais passionné par la création d'expériences web innovantes.`}
        />
        <CardItem
          title={"RQTH - Reconnaissance de la Qualité de Travailleur Handicapé"}
          content={`Suite à un sérieux accident de travail à mon dernier poste, j'ai obtenu la Reconnaissance de la Qualité de Travailleur Handicapé (RQTH). Cette expérience a renforcé ma détermination à poursuivre ma carrière dans un domaine qui allie ma passion et mes compétences.`}
        />

        <CardItem
          title={"Perspectives d'avenir"}
          content={`Actuellement à la recherche de ma première réelle expérience en tant que développeur web, je me suis également tourné vers l'idée d'explorer des opportunités d'alternance pour atteindre un niveau master. Je suis convaincu que cette démarche ouvrira de nouvelles perspectives et enrichira davantage mes compétences.`}
        />

        <CardItem
          title={"Téléchargez mon CV"}
          content={`Téléchargez mon CV pour en savoir plus sur mon parcours professionnel et mes compétences.`}
          link={myResume}
          fileName={"CV Dammaretz Gaëtan - Développeur web Jr"}
          linkText={"Télécharger le CV"}
        />
      </div>
    </div>
  );
}

export default ProfessionalExperience;
