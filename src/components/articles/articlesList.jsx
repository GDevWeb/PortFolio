import apprenticeJourney from "/images/apprentice_journey.jpg?url";
import { Link } from "react-router-dom";

const articlesList = [
  {
    id: 0,
    picture: apprenticeJourney,
    title: "À la recherche d'un contrat de professionnalisation",
    author: "GDevWeb",
    content: (
      <>
        <p>
          🚀 À la recherche d'une opportunité d'alternance passionnante en tant
          que bachelor Développeur Web!
        </p>

        <p>
          💼 Fort de mon titre professionnel Développeur Web et Web Mobile et de
          ma passion pour le développement web, je suis prêt à relever de
          nouveaux défis.{" "}
        </p>

        <p>
          À 39 ans, mon esprit d'équipe, ma créativité et ma détermination sont
          mes meilleurs atouts.
        </p>

        <p>
          ⚙️Cette alternance se fera avec Junia XP Lille (I.S.N) sous un rythme
          de 3 semaines en entreprise et 1 semaine en école.
        </p>

        <p>
          📅 Disponible dès maintenant ou pour la prochaine rentrée 2024/2025,
          je suis impatient de rejoindre une équipe dynamique où je pourrai
          contribuer et continuer à évoluer.
        </p>

        <p>
          Employeurs, n'hésitez pas à me <Link to="/contact">contacter</Link>{" "}
          pour discuter de cette opportunité passionnante !
        </p>
      </>
    ),

    date: "18/04/2024",
    tags: ["Alternance", "Bachelor", "Développeur web"],
  },
];

export default articlesList;
