import "../sass/professionalExperience.scss";
import myResume from "/docs/CV-Dammaretz_Gaêtan_Développeur_Web.pdf";

function ProfessionalExperience() {
  return (
    <div id="mainContainer" className="professionalExperienceContainer">
      <div className="professionalExperienceTitle">
        <h2>Mon parcours professionnel</h2>
      </div>

      <section className="transition">
        <h3>Transition vers le développement web</h3>
        <p>
          Après plus de 10 ans d'expérience professionnelle, j'ai entrepris une
          transition majeure vers le développement web. Diplômé d'un titre
          professionnel DWWM en octobre 2023, je suis désormais passionné par la
          création d'expériences web innovantes.
        </p>
      </section>

      <section className="handicap">
        <h3>RQTH</h3>
        <p>
          Suite à un sérieux accident de travail à mon dernier poste, j'ai
          obtenu la Reconnaissance de la Qualité de Travailleur Handicapé
          (RQTH). Cette expérience a renforcé ma détermination à poursuivre ma
          carrière dans un domaine qui allie ma passion et mes compétences.
        </p>
      </section>

      <section className="futur">
        <h3>Perspectives d'avenir</h3>
        <p>
          Actuellement à la recherche de ma première réelle expérience en tant
          que développeur web, je me suis également tourné vers l'idée
          d'explorer des opportunités d'alternance pour atteindre un niveau
          master. Je suis convaincu que cette démarche ouvrira de nouvelles
          perspectives et enrichira davantage mes compétences.
        </p>
      </section>

      <section className="resume">
        <h3>Téléchargez mon CV</h3>
        <p>
          Téléchargez mon CV pour en savoir plus sur mon parcours professionnel
          et mes compétences.
        </p>
        <button className="cta-button">
          <a
            href={myResume}
            download="CV Dammaretz Gaëtan - Développeur web Jr"
          >
            Télécharger mon CV
          </a>
        </button>
      </section>
    </div>
  );
}

export default ProfessionalExperience;
