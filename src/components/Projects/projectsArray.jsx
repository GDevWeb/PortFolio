import ImagesProject from "../../../public/images/projects/indexImageProjects";

const projectsArray = [
  {
    id: 0,
    title: "PassionGuitar",
    picture: ImagesProject.imagePassionGuitar,
    description: (
      <>
        <p>
          PassionGuitar est un site vitrine que j'ai développé sur demande d'un
          client passionné de guitare. Ce site présente une sélection de
          produits liés à la guitare, tels que des instruments, des accessoires
          et des cours en ligne.
        </p>
        <p>
          En utilisant HTML, CSS et JavaScript, j'ai créé une interface
          intuitive et conviviale qui permet aux utilisateurs de parcourir
          facilement les différents produits disponibles. Le site est également
          entièrement responsive, assurant une expérience utilisateur optimale
          sur tous les appareils.
        </p>
        <p>
          Explorez PassionGuitar pour découvrir l'univers de la guitare et
          trouver tout ce dont vous avez besoin pour nourrir votre passion
          musicale. 🎸🎶
        </p>
      </>
    ),
    resume: "Site vitrine pour un client passionné de guitare.",
    link: "https://gdevweb.github.io/PassionGuitar/",
    category: [
      "frontend",
      "site vitrine",
      "html",
      "css",
      "javascript",
      "responsive",
    ],
  },
  {
    id: 1,
    title: "Memory Kidz",
    picture: ImagesProject.imageMemoryKidz,
    description: (
      <>
        <p>
          Memory Kidz est un jeu de mémoire simple et amusant, adapté aux
          enfants dès l'âge de 4 ans. Avec ses couleurs vives et son design
          ludique, ce jeu offre une expérience divertissante tout en stimulant
          la mémoire et la concentration des enfants. 🧠🎮
        </p>
        <p>
          Développé avec HTML, CSS et JavaScript, Memory Kidz propose un mode de
          jeu unique où les joueurs doivent trouver les bonnes paires en moins
          de coups possible. Son interface intuitive et conviviale permet une
          navigation facile, tandis que sa compatibilité responsive garantit une
          expérience de jeu optimale sur tous les appareils, que ce soit sur un
          ordinateur de bureau, une tablette ou un smartphone. 📱💻
        </p>
        <p>
          Plongez dans le monde captivant de Memory Kidz et offrez à vos enfants
          un moyen amusant d'exercer leur cerveau et de développer leurs
          compétences cognitives. 👦👧
        </p>
      </>
    ),
    resume: "Application de gestion de tâches développée avec React.",
    link: "https://gdevweb.github.io/Game-Memory-Card/",
    category: ["frontend", "jeux", "html", "css", "javascript", "responsive"],
  },
  {
    id: 2,
    title: "DaddyDoList",
    picture: ImagesProject.imageDaddyDoList,
    description: (
      <>
        <p>
          DaddyDoList est une application de gestion de tâches que j'ai
          développée en utilisant React. Conçue pour simplifier la vie
          quotidienne, cette application permet aux utilisateurs de créer,
          modifier et supprimer des tâches facilement. 📝✅
        </p>
        <p>
          Grâce à l'utilisation du localStorage, les tâches sont sauvegardées
          localement dans le navigateur, ce qui garantit que les utilisateurs
          peuvent accéder à leur liste de tâches même après avoir fermé
          l'application.
        </p>
        <p>
          Avec une interface conviviale et réactive, DaddyDoList offre une
          expérience utilisateur fluide et agréable. Organisez votre journée
          efficacement et ne manquez jamais une tâche importante avec
          DaddyDoList. ⏰🚀
        </p>
      </>
    ),
    resume: "Application de gestion de tâches développée avec React.",
    link: "https://daddy-do-list.vercel.app/",
    category: [
      "frontend",
      "application",
      "html",
      "css",
      "javascript",
      "responsive",
      "React",
    ],
  },
  {
    id: 3,
    title: "Mon portFolio",
    picture: ImagesProject.imagePortFolio,
    description: (
      <>
        <p>
          Que dire au sujet de mon portFolio ?! Au jour d'aujourd'hui il est en
          pur frontend mais je m'applique à réviser le backend afin de lui
          apporter plus de flexibilité et de dynamisme. 💼💻
        </p>
        <p>
          Cela me tient à cœur d'apporter des modifications fréquentes diverses
          et variées à ce dernier.
        </p>
      </>
    ),
    resume: "Mon portfolio personnel développé en frontend.",
    link: "https://gdevweb.vercel.app/",
    category: [
      "frontend",
      "application",
      "html",
      "css",
      "javascript",
      "responsive",
      "React",
      "React Router",
    ],
  },
  {
    id: 4,
    title: "Mon petit primeur",
    picture: ImagesProject.imageProjectInProgress,
    description: (
      <>
        <p>
          Mon petit primeur est un projet personnel dit sandbox qui me permet de
          revoir les notions de React, telles que le contexte et Redux Toolkit.
        </p>
        <p>
          Ainsi qu'une grosse révision du backend - Actuellement en cours de
          développement !
        </p>
      </>
    ),
    resume:
      "Projet personnel pour revisiter les notions de React et du backend.",
    link: "#",
    category: [
      "frontend",
      "application",
      "html",
      "css",
      "javascript",
      "responsive",
      "React",
    ],
  },
];

export default projectsArray;
