import github from "./github.png";
import linkedin from "./linkedin.png";
import react from "./Classic React Certificate.pdf";
import modern_js from "./Modern JavaScript Certificate.pdf";

export const ICONS = [
  {
    img: `${github}`,
    link: "https://github.com/baptistemcn",
    name: "Github",
  },
  {
    img: `${linkedin}`,
    link: "https://www.linkedin.com/in/baptiste-marcon/",
    name: "Linkedin",
  },
];

export const EXPERIENCES = [
  {
    title: "Full-Stack Developper - NEHS Digital",
    presentation:
      "Dans mon rôle actuel, je me concentre sur le développement de nouvelles fonctionnalités, la création d'intégrations de design attrayantes et la gestion du code hérité, contribuant ainsi à l'évolution et à l'amélioration continues de nos produits.",
    technologies: [
      {
        name: "Angular 13",
      },
      {
        name: "RxJS",
      },
      {
        name: "Rest API",
      },
      {
        name: "PHP5",
      },
    ],
  },
];

export const EXPERIENCES_EN = [
  {
    title: "Full-Stack Developer - NEHS Digital",
    presentation:
      "In my current role, I focus on developing new features, creating appealing design integrations, and managing legacy code, thereby contributing to the continuous evolution and improvement of our products.",
    technologies: [
      {
        name: "Angular 13",
      },
      {
        name: "RxJS",
      },
      {
        name: "Rest API",
      },
      {
        name: "PHP5",
      },
    ],
  },
];

export const CERTIFICATES = [
  {
    name: "Class React by dev.ui",
    link: "https://ui.dev/c/classic-react/",
    download: `${react}`,
    label: "Download",
  },
  {
    name: "Modern Javascript by dev.ui",
    link: "https://ui.dev/c/modern-javascript/",
    download: `${modern_js}`,
    label: "Download",
  },
];
