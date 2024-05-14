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
    request: "Le client a besoin de faire connaître son activité.",
    solution:
      "Je lui ai proposé une landing page en vanilla. Le client ayant des connaissances en HTML il peut gérer lui même le contenu de cette page.",
    difficulties:
      "Problème d'optimisation et de référencement dû à la technologie Javascript vanilla et le temps court accordé pour la conception du projet.",
    upgrades: "Utiliser un framework Javascript pour l'optimisation.",
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
    request:
      "Une application développée à la demande de l'institutrice de ma fille actuellement en moyenne section.",
    solution:
      "Je lui ai proposé un jeux de memory sur le thème des fruits simple à utiliser.",
    difficulties: "Pas de difficultés particulières.",
    upgrades:
      "Proposer différentes thèmes de cartes ainsi que différents modes de jeux",
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
    request:
      "Pour mon besoin personnel afin d'organiser mes tâches de la journée",
    solution: "Utilisation de React avec un localStorage.",
    difficulties: "Pas de difficultés particulières.",
    upgrades:
      "Améliorer l'interface, ajouter des fonctionnalités supplémentaires et ajouter un backend.",

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
    request:
      "Besoin personnel, me faire connaître auprès de la communauté des développeurs web",
    solution: "Création de mon portfolio avec React, react-router, sass.",
    difficulties: "Pas de difficultés particulières",
    upgrades:
      "Mise à jour fréquente au fur et à mesure de ma maîtrise du REACT.",
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
    title: "My Family NetWork",
    picture: ImagesProject.imageMyFamilyNetwork,
    description: (
      <>
        <p>
          My Family NetWork 👨‍👩‍👧‍👦 est un projet personnel évolutif en cours de
          développement.
        </p>
        <p>
          Dans sa première version, il sera un album photo consultable en ligne.
        </p>
        <p>
          Au moment où j'écris ce post, j'ai presque fini l'intégration statique
        </p>
        <p>Prochain grand cap, l'intégration du backend</p>
      </>
    ),
    request: "Besoin personnel, répondre à une demande de la famille.",
    solution:
      "Créer un album photo  en ligne grâce à React, react-router, sass.",
    difficulties: "Pas de difficultés particulières pour la v1.",
    upgrades:
      "Ajouter un backend pour les prochaines version - login, compte etc ...",
    resume: "My Family Network, un album photo familial.",
    link: "https://my-family-network.vercel.app/",
    category: [
      "frontend",
      "backend",
      "application",
      "html",
      "css",
      "javascript",
      "responsive",
      "React",
      "React Router",
    ],
  },
];

export default projectsArray;
